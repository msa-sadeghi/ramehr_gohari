import pygame
from pygame.locals import *
from constants import *
from player import Player
from world import draw_grid, World
from button import Button
import os
import pickle

score = 0


font_score = pygame.font.Font('img/Elephant Regular.ttf', 20)
pygame.mixer.music.load("img\music.wav")
pygame.mixer.music.play(-1, 0.0, 5000)

def draw_text(text, font, color, x,y):
    txt = font.render(text, True, color)
    screen.blit(txt, (x,y))


def reset_level(level):
    player.reset(100, SCREEN_HEIGTH-130)
    blob_group.empty()
    lava_group.empty()
    coin_group.empty()
    platform_group.empty()
    exit_door_group.empty()
    if os.path.exists(f"levels\level{level}_data"):
        file = open(f"levels\level{level}_data", "rb")
        world_data = pickle.load(file)
        world = World(world_data, blob_group, lava_group, exit_door_group, coin_group, platform_group)
        return  world

level = 1
max_level = 10
world_data = []
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGTH))
clock = pygame.time.Clock()

sky_image = pygame.image.load('img\sky.png')
sun_image = pygame.image.load('img\sun.png')
restart_button_image = pygame.image.load('img/restart_btn.png')
start_button_image = pygame.image.load('img/start_btn.png')
start_button_image = pygame.transform.scale(start_button_image,(start_button_image.get_width()*0.6 , start_button_image.get_height()*0.6))
exit_button_image = pygame.image.load('img/exit_btn.png')
exit_button_image = pygame.transform.scale(exit_button_image, (exit_button_image.get_width()*0.6, exit_button_image.get_height()*0.6))

restart_button = Button(SCREEN_WIDTH/2,SCREEN_HEIGTH/2, restart_button_image)
start_button = Button(SCREEN_WIDTH/2-250,SCREEN_HEIGTH/2, start_button_image)
exit_button = Button(SCREEN_WIDTH/2+250,SCREEN_HEIGTH/2, exit_button_image)

blob_group = pygame.sprite.Group()
lava_group = pygame.sprite.Group()
exit_door_group = pygame.sprite.Group()
coin_group = pygame.sprite.Group()
platform_group = pygame.sprite.Group()

if os.path.exists(f"levels\level{level}_data"):
    file = open(f"levels\level{level}_data", "rb")
    world_data = pickle.load(file)

world = World(world_data,blob_group,lava_group,exit_door_group, coin_group, platform_group)
player = Player(100, SCREEN_HEIGTH-130)
game_status = "playing"
main_menu = True
running = True
while running:
    for event in pygame.event.get():
        if event.type == QUIT:
            running = False

    screen.blit(sky_image, (0, 0))

    # screen.blit(sun_image, (100, 100))
    if main_menu:
        start_button.draw(screen)
        if start_button.clicked():
            main_menu = False
        exit_button.draw(screen)
        if exit_button.clicked():
            running = False
    else:
        # draw_grid(screen)
        world.draw(screen)
        draw_text(f'X {score}', font_score, (255,255,255), 10,10)
        game_status,score =player.update(screen, world.tile_list, blob_group, lava_group,exit_door_group,game_status, coin_group, score)
        if game_status == "game_over":
            restart_button.draw(screen)
            if restart_button.clicked():
                game_status = "playing"
                player.reset(100, SCREEN_HEIGTH-130)
                reset_level(level)
                score = 0
        if game_status == "exit":
            level+=1
            if level <= max_level:
                world_data = []
                world = reset_level(level)
                game_status = "playing"

        blob_group.update()
        lava_group.update()
        lava_group.draw(screen)
        blob_group.draw(screen)
        coin_group.draw(screen)
        platform_group.draw(screen)
        platform_group.update()
        exit_door_group.draw(screen)
    pygame.display.update()
    clock.tick(FPS)


# TODO   adding   Moving Platforms  Collisons