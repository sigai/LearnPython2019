from django.shortcuts import render, HttpResponse, redirect
from django.views import View
from app01 import models

# Create your views here.

# USER_DICT = {
#     'k1': 'v1',
#     'k2': 'v2',
#     'k3': 'v3',
# }
USER_DICT = {'1': {'name': 'root1', 'email': 'root1@qq.com'}, '2': {'name': 'root2', 'email': 'root2qq.com'},
    '3': {'name': 'root3', 'email': 'root3qq.com'}, '4': {'name': 'root4', 'email': 'root4qq.com'},
    '5': {'name': 'root5', 'email': 'root5qq.com'}, '6': {'name': 'root6', 'email': 'root6@qq.com'}, }


def index(request):
    user = {'username': "test", }
    return render(request, 'index.html', {'user': user})


def detail(request, uid, nid):
    # return HttpResponse(nid+'\n'+uid)
    # nid = request.GET.get(nid)
    info = USER_DICT[nid]
    return render(request, 'detail.html', {'info': info})


# def login(request):
#     if request.method == "GET":
#         return render(request, 'login.html')
#     elif request.method == "POST":
#         # v = request.POST.get('upload')
#         import os
#         obj = request.FILES.get('upload')
#         filepath = os.path.join('upload', obj.name)
#
#         with open(filepath, 'ab') as t:
#             for data in obj.chunks():
#                 t.write(data)
#         return render(request, 'login.html')
#     else:
#         return redirect('/index/')


def login(request):
    if request.method == "GET":
        return render(request, 'login.html')
    elif request.method == "POST":
        u = request.POST.get('user')
        p = request.POST.get('pwd')
        # 推荐
        obj = models.UserInfo.objects.filter(username=u, password=p).first()
        # obj = models.UserInfo.objects.filter(username=u,password=p).count()

        if obj:
            print(obj)
            return redirect('/index/')
        else:
            print(obj)
            return render(request, 'login.html')
    else:
        return redirect('/index/')


def user_info(request):
    if request.method == "GET":
        user_list = models.UserInfo.objects.all()
        # print(user_list.query)

        return render(request, 'user_info.html', {'user_list': user_list})
    elif request.method == "POST":
        u = request.POST.get('user')
        p = request.POST.get('pwd')
        models.UserInfo.objects.create(username=u, password=p,)
        return redirect("/user_info")
        # user_list = models.UserInfo.objects.all()
        # return render(request, 'user_info.html', {'user_list': user_list})

def user_detail(request, nid):
    obj = models.UserInfo.objects.filter(id=nid).first()
    # 取单条会报错
    # models.UserInfo.objects.get(id=nid)

    return render(request, 'user_detail.html', {'obj': obj})

def user_del(request, nid):
    models.UserInfo.objects.filter(id=nid).delete()
    return redirect("/user_info/")

def user_edit(request, nid):
    if request.method =="GET":
        obj = models.UserInfo.objects.filter(id=nid).first()
        return render(request, 'user_edit.html', {'obj': obj})
    elif request.method == "POST":
        nid = request.POST.get('id')
        u = request.POST.get('username')
        p = request.POST.get('password')
        models.UserInfo.objects.filter(id=nid).update(username=u,password=p)
        return redirect("/user_info/")


class Home(View):
    def get(self, request):
        print(request.method)
        return render(request, 'home.html')

    def post(self, request):
        print(request.method)
        return render(request, 'home.html')


def orm(request):
    # 增
    # 直接的方式（推荐的方式 代码少）
    models.UserInfo.objects.create(username='administrator', password='wangyanjing', )

    # 字典方式（直接方式的参数化而已 可能操作数据量大的时候比较合适）
    # dic = {'username':'testuser2', 'password':'testuser2',}
    # models.UserInfo.objects.create(**dic)

    # 实例方式
    # obj = models.UserInfo(username='testuser4', password='testuser4',)
    # obj.save()

    # 删
    # models.UserInfo.objects.filter(id=4).delete()

    # 改
    # models.UserInfo.objects.filter(id=1).update(password='试试')

    # 查
    # result = models.UserInfo.objects.filter(username='testuser4',password='testuser4')
    # 查询全部
    # result = models.UserInfo.objects.all()
    # for data in result:
    #     print(data.username, data.password)



    return HttpResponse("新建用户")

# def index(request):
#     return render(request, 'index.html', {'user_dict': USER_DICT})
