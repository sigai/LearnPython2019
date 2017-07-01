#!/usr/bin/python
# -*- coding: UTF-8 -*-
__author__ = "Sigai"


import os
from win32com.client import DispatchEx,constants
from win32com.client.gencache import EnsureDispatch


full_path = os.path.abspath(os.path.curdir)

EnsureDispatch('Word.Application')  # makepy 导入Word类库，否则constants无法使用

msword = DispatchEx('Word.Application')
msword.Visible = False  # 是否可见
msword.DisplayAlerts = 0

doc = msword.Documents.Open(FileName= os.path.join(full_path,r'word.docx'))  # 打开已有文件
#newdoc = msword.Documents.Add()  # 添加新文件

doc.SaveAs(FileName=os.path.join(full_path, r'new.txt'), FileFormat=4) #另存为

doc.Close()
msword.Quit()
