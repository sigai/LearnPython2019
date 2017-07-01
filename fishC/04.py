#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

import itertools, math
from operator import itemgetter


def spiral(n, m):
    _status = itertools.cycle(['right', 'down', 'left', 'up'])  # 用于状态周期性的切换
    _movemap = {
        'right': (1, 0),
        'down': (0, 1),
        'left': (-1, 0),
        'up': (0, -1),
    }
    pos2no = dict.fromkeys([(x, y) for x in range(n) for y in range(m)])  # 生成字典键值是向量元组
    _pos = (0, 0)
    _st = next(_status)
    for i in range(1, n * m + 1):
        _oldpos = _pos
        _pos = tuple(map(sum, zip(_pos, _movemap[_st])))  # 根据状态进行移动
        if (_pos not in pos2no) or (pos2no[_pos]):  # 当超出范围或遇到障碍时切换方向
            _st = next(_status)
            _pos = tuple(map(sum, zip(_oldpos, _movemap[_st])))
        pos2no[_oldpos] = i
    return pos2no


def prime(n):
    if n is None:
        return False
    if n % 2 == 0:
        return n == 2
    if n % 3 == 0:
        return n == 3
    if n % 5 == 0:
        return n == 5
    for p in range(7, int(math.sqrt(n)) + 1, 2):  # 只考虑奇数作为可能因子
        if n % p == 0:
            return False
    return True


class Uzimaki(object):
    def __init__(self, n, m):
        self.n = n
        self.m = m
        self.spiral = spiral(self.n, self.m)

    def display_spiral(self):
        pos2no = spiral(self.n, self.m)
        for i in range(self.m):
            for j in range(self.n):
                print(pos2no[(j, i)], end='\t', )
            print('\n')
        print('-' * 5 * self.n)

    def neighbors(self, n):
        # print(self.spiral)
        n_pos = {v: (x, y) for (x, y), v in self.spiral.items()}[n]
        nbs_pos = [(x, y) for x in [-1, 0, 1] for y in [-1, 0, 1] if x != 0 or y != 0]
        nbs = []
        for x, y in nbs_pos:
            nbs.append(self.spiral.get((n_pos[0] + x, n_pos[1] + y), None))
        result = list(set(nbs))
        # print(result)
        return result

    def get_prime_neighbors(self, n):
        tmp = []
        for i in self.neighbors(n):
            if prime(i):
                tmp.append(i)
        # print(tmp)
        return tmp

    def get_most_prime_neighbors(self):
        rank = []
        for i in range(1, self.n * self.m):
            rank.append((i, len(self.get_prime_neighbors(i))))
        rank = sorted(rank, key=itemgetter(1), reverse=True)
        print("在给定%d行和%d列的螺旋矩阵中，%d拥有的质数邻居最多,它有%d个质数邻居."%(self.n,self.m,rank[0][0],rank[0][1]))
        return rank[0]


Uzimaki(4, 4).display_spiral()
Uzimaki(4, 4).neighbors(14)
Uzimaki(4, 4).get_prime_neighbors(14)
Uzimaki(4, 4).get_most_prime_neighbors()
