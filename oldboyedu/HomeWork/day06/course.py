#!/usr/bin/env python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


class School(object):


    def __init__(self, school_name):
        self.school_name = school_name
        self.teachers = []
        self.students = []
        self.cls = []

    def new_cls(self, cls_obj):
        self.cls.append(cls_obj)

    def hire_teacher(self, teacher_obj):
        self.teachers.append(teacher_obj)

class SchoolMember(object):

    def __init__(self, name):
        self.name = name



class Course(object):
    pass


class Student(SchoolMember):
    pass


class Teacher(SchoolMember):
    pass

school_SH = School("上海科技大学")
school_BJ = School("北京科技大学")
