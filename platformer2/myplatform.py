from pygame.sprite import Sprite
from constants import *

class Platform(Sprite):
    def __init__(self, x,y, move_x, move_y):
        super().__init__()
        img = pygame.image.load("img/platform.png")
        self.image = pygame.transform.scale(img, (TILE_SIZE, TILE_SIZE//2))
        self.rect = self.image.get_rect(topleft=(x,y))
        self.move_x = move_x
        self.move_y = move_y
        self.direction = 1
        self.counter = 0

    def update(self):
        self.rect.x += self.move_x * self.direction
        self.rect.y += self.move_y * self.direction
        self.counter += 1
        if self.counter > TILE_SIZE:
            self.counter *= -1
            self.direction *= -1
