#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pygame
from pygame.locals import *


def main():
    pygame.init()
    pygame.display.set_caption("Plane Wars III")
    screen = pygame.display.set_mode((480, 852),0,32)
    background = pygame.image.load("data/image/background.png")

    while True:
        for event in pygame.event.get():
            if event.type == QUIT:
                return
        screen.blit(background, (0,0))
        pygame.display.update()


if __name__ == '__main__':
    main()
