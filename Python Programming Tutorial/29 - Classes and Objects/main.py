#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"
'''类和对象'''


class Enemy:
    life = 3

    def attack(self):
        print("Ouch!")
        self.life -= 1

    def checklife(self):
        if self.life <= 0:
            print("Game Over!")
        else:
            print(str(self.life) + " lift left!")

monster = Enemy()
boss = Enemy()
boss.attack()
boss.attack()
boss.checklife()

monster.attack()
monster.attack()
monster.attack()
monster.checklife()