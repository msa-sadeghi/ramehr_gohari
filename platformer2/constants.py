import pygame
SCREEN_WIDTH = 1000
SCREEN_HEIGTH = 600
FPS = 60
TILE_SIZE = 50
pygame.init()

coin_sound = pygame.mixer.Sound("img\coin.wav")
coin_sound.set_volume(0.5)
game_over_sound = pygame.mixer.Sound("img\game_over.wav")
game_over_sound.set_volume(0.5)

jump_sound = pygame.mixer.Sound("img\jump.wav")
jump_sound.set_volume(0.5)