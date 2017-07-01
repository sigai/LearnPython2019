#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"

china={
    '北京':{
        '通州区':['永顺镇', '梨园镇', '宋庄镇', '漷县镇', '张家湾镇', '玉桥街道', '北苑街道'],
        '海淀区':['四季青镇', '东升镇', '海淀镇', '西北旺镇', '温泉镇', '苏家坨镇', '上庄镇'],
        '东城区':['安定门街道', '建国门街道', '朝阳门街道', '永定门外街道', '崇文门外街道', '体育馆路街道'],
        '朝阳区':['南磨房地区', '高碑店地区', '王四营地区', '东坝地区', '金盏地区', '平房地区', '来广营地区'],
        '丰台区':['右安门街道', '太平桥街道', '西罗园街道', '王佐镇', '卢沟桥乡（地区）', '南苑乡（地区）'],
    },
    '天津':{
        '和平区':['梨园镇','张家湾'],
        '红桥区':['梨园镇','张家湾'],
        '西青区':['梨园镇','张家湾'],
        '北辰区':['梨园镇','张家湾'],
        '武清区':['梨园镇','张家湾'],
    },
    '河北':{
        '唐山':['梨园镇','张家湾'],
        '秦皇岛':['梨园镇','张家湾'],
        '邢台':['梨园镇','张家湾'],
        '保定':['梨园镇','张家湾'],
        '张家口':['梨园镇','张家湾'],
    },
    '山西':{
        '太原':['梨园镇','张家湾'],
        '晋城':['梨园镇','张家湾'],
        '朔州':['梨园镇','张家湾'],
        '晋中':['梨园镇','张家湾'],
        '临汾':['梨园镇','张家湾'],
    },
    '广东':{
        '广州':['梨园镇','张家湾'],
        '韶关':['梨园镇','张家湾'],
        '湛江':['梨园镇','张家湾'],
        '梅州':['梨园镇','张家湾'],
        '河源':['梨园镇','张家湾'],
    },
    '上海':{
        '黄浦':['梨园镇','张家湾'],
        '徐汇':['梨园镇','张家湾'],
        '普陀':['梨园镇','张家湾'],
        '杨浦':['梨园镇','张家湾'],
        '宝山':['梨园镇','张家湾'],
    },
}

tips = "请输入[]中的数字选择选项，b返回，q退出：\n>>>:请输入您的操作:"
flag = True
while flag:
    citys= list(china.keys())
    for i, option in enumerate(citys):
        print('[{no:d}] : {option:s}'.format(no=i,option=option))
    user_input1 = input(tips)
    if user_input1 == 'q':
        flag = False
        break
    elif user_input1 == 'b':
        continue
    elif user_input1 not in [str(i) for i in range(len(citys))]:
        print("请输入有效操作！")
        continue
    else:
        choosen1 = citys[int(user_input1)]
        towns = list(china[choosen1].keys())

        while True:
            for i,option in enumerate(towns):
                print('[{no:d}] : {option:s}'.format(no=i, option=option))
            user_input2 = input(tips)
            if user_input2 == 'q':
                flag = False
                break
            elif user_input2 == 'b':
                break
            elif user_input2 not in [str(i) for i in range(len(towns))]:
                print("请输入有效操作！")
                continue
            else:
                choosen2 = towns[int(user_input2)]
                valages = china[choosen1][choosen2]

                while True:
                    for i, option in enumerate(valages):
                        print('[{no:d}] : {option:s}'.format(no=i, option=option))
                    user_input3 = input(tips)
                    if user_input3 == 'q':
                        flag = False
                        break
                    elif user_input3 == 'b':
                        break
                    else:
                        print("请输入有效操作！")
                        continue
