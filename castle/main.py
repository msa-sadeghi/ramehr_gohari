import pygame
from pygame.sprite import Sprite
pygame.init()

SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))

clock = pygame.time.Clock()
FPS = 60

bg = pygame.image.load("img/bg.png")
castle_img_100 = pygame.image.load("img/castle/castle_100.png")

class Castle:
    def __init__(self, image100, x,y, scale):
        self.health = 1000
        self.max_health = self.health

        self.image100 = pygame.transform.scale(image100, (image100.get_width() * scale, image100.get_height() * scale))
        self.rect = self.image100.get_rect(topleft = (x,y))
    def draw(self):
        self.image = self.image100
        screen.blit(self.image, self.rect)

    def shoot(self):
        pass

class Bullet(Sprite):
    def __init__(self, image, x,y, angle):
        super().__init__()
        self.image = image
        self.rect = self.image.get_rect(topleft = (x,y))
        # TODO add dx and dy
        # TODO Add angle
        self.speed = 10

    def update(self):
        self.rect.x += self.speed
        self.rect.y += self.speed



castle = Castle(castle_img_100, SCREEN_WIDTH - 200, SCREEN_HEIGHT - 300, 0.2)


bullet_group = pygame.sprite.Group()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    screen.blit(bg, (0,0))
    castle.draw()
    pygame.display.update()