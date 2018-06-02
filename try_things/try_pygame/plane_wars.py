#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import pygame
from pygame.locals import *
import time

class Plane(object):
    def __init__(self,screen, location):
        self.x = location[0]
        self.y = location[1]
        self.screen = screen
        self.image = pygame.image.load("data/image/hero1.png")
        self.bullets = []

    def display(self):
        self.screen.blit(self.image, (self.x, self.y))
        t = []
        for bullet in self.bullets:
            if bullet.y < bullet.image.get_height() * -1:
                t.append(bullet)
            else:
                bullet.display()
                bullet.move()
        for b in t:
            self.bullets.remove(b)


    def fire(self):
        self.bullets.append(Bullet(self.screen, (self.x+self.image.get_width()*0.5, self.y)))
        print(len(self.bullets))

    def move_left(self):
        self.x -= 20

    def move_right(self):
        self.x += 20

    def __str__(self):
        return f"<Plane:({self.x}, {self.y})>"


class Bullet(object):
    def __init__(self, screen, location):
        self.x = location[0]
        self.y = location[1]
        self.screen = screen
        self.image = pygame.image.load("data/image/bullet.png")

    def display(self):
        self.screen.blit(self.image, (self.x-self.image.get_width()*0.5, self.y))

    def move(self):
        self.y -= 5


def event_loop(hero):
    for event in pygame.event.get():
        if event.type == QUIT:
            exit()
        elif event.type == KEYDOWN:
            if event.key == K_a or event.key == K_LEFT:
                hero.move_left()
            elif event.key == K_d or event.key == K_RIGHT:
                hero.move_right()
            elif event.key == K_SPACE:
                hero.fire()
        else:
            time.sleep(0.01)


def main():
    pygame.init()
    pygame.display.set_caption("Plane Wars III")
    icon = pygame.image.load("data/image/icon72x72.png")
    pygame.display.set_icon(icon)
    background = pygame.image.load("data/image/background.png")
    hero = pygame.image.load("data/image/hero1.png")
    screen = pygame.display.set_mode((background.get_width(), background.get_height()), 0, 32)
    start = ((background.get_width() - hero.get_width())//2, background.get_height() - hero.get_height())
    print(start)
    hero_plane = Plane(screen, start)
    print(hero_plane)

    while True:
        screen.blit(background, (0,0))
        hero_plane.display()
        pygame.display.update()
        event_loop(hero_plane)


if __name__ == '__main__':
    main()
