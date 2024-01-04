import pygame.image
from pygame.sprite import Sprite
from constants import *

class Coin(Sprite):
    def __init__(self, x,y):
        super().__init__()
        img = pygame.image.load("img\coin.png")
        self.image = pygame.transform.scale(img, (TILE_SIZE, TILE_SIZE))
        self.rect = self.image.get_rect(topleft=(x,y))
