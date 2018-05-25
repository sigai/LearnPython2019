#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pygame
from pygame.locals import *


def main():
    pygame.init()
    pygame.display.set_caption("Plane Wars III")
    background = pygame.image.load("data/image/background.png")
    hero = pygame.image.load("data/image/hero1.png")
    screen = pygame.display.set_mode((background.get_width(), background.get_height()), 0, 32)

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                return
        screen.blit(background, (0,0))
        screen.blit(hero, ((background.get_width() - hero.get_width())//2, background.get_height() - hero.get_height()))
        pygame.display.update()



if __name__ == '__main__':
    main()
