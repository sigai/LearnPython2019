import os

from django.shortcuts import render, HttpResponse, redirect
from django.views import View
from django.urls import reverse
from cmdb import models

# Create your views here.


def root(request):
    return HttpResponse("<h1>CMDB Root!</h1>")


def login(request):
    if request.method == "POST":
        usr = request.POST.get("usr")
        pwd = request.POST.get("pwd")
        obj = models.UserInfo.objects.filter(username=usr,password=pwd).first()
        if obj:
            return redirect("/cmdb/index/")
        else:
            return redirect('/cmdb/login')
    elif request.method == "GET":
        return render(request, 'login.html')
    else:
        return redirect("/cmdb/index/")


def signup(request):
    if request.method == "POST":
        usr = request.POST.get("username")
        pwd = request.POST.get("password")
        group_id = request.POST.get("usergroup")
        # gen = request.POST.get("gender")
        # idols = request.POST.getlist("idol")
        # cities = request.POST.getlist("city")
        # file_obj = request.FILES.get("fname")
        # upload_path = os.path.join("upload", file_obj.name)
        # with open(upload_path,'wb') as f:
        #     for each in file_obj.chunks():
        #         f.write(each)
        #
        # print(usr, pwd, gen, idols, cities, file_obj.name)

        # models.UserInfo.objects.create(username=usr,password=pwd)

        obj = models.UserInfo(username=usr,password=pwd,user_group_id=group_id)
        obj.save()

        return redirect("/cmdb/user_info/")

    elif request.method == "GET":
        return render(request, "signup.html")
    else:
        return redirect("/login/")

class Home(View):

    def dispatch(self, request, *args, **kwargs):
        res = super(Home,self).dispatch(request, *args, **kwargs)
        return res

    def get(self, request):
        print(request.method)
        return render(request, 'home.html')

    def post(self, request):
        print(request.method)
        return render(request, 'home.html')


USER_DICT = {
    "1": {"user":"v1", "detail":"k1"},
    "2": {"user":"v2", "detail":"k2"},
    "3": {"user":"v3", "detail":"k3"},
    "4": {"user":"v4", "detail":"k4"},
}


class Index(View):

    def get(self, request):
        v = reverse("iindex")
        print(v)
        objs = models.UserInfo.objects.all()
        return render(request, 'index.html', {"objs": objs})


class Detail(View):

    def get(self, request, nid):
        # return HttpResponse(nid+uid)
        detail = models.UserInfo.objects.filter(id=nid).first()

        return render(request, 'detail.html', {'detail': detail})


class Orm(View):

    def get(self, request):
        objs = models.UserInfo.objects.all()
        for obj in objs:
            print(obj.username, obj.password)
        return render(request, 'orm.html',{"objs":objs})

    def post(self, request):
        usr = request.POST.get("usr")
        pwd = request.POST.get("pwd")
        models.UserInfo.objects.create(username=usr, password=pwd)
        return redirect('/orm/')


class UserInfo(View):

    def get(self, request):
        user_list = models.UserInfo.objects.all()
        user_group = models.UserGroup.objects.all()
        return render(request, 'user_info.html', {"user_list":user_list,"user_group":user_group})



class UserGroup(View):

    def get(self, request):
        objs = models.UserGroup.objects.all()
        return render(request, 'user_group.html', {"objs":objs})

    def post(self, request):
        caption = request.POST.get("caption")

        models.UserGroup.objects.create(caption=caption)
        return redirect("/cmdb/user_group/")


class UserDetail(View):

    def get(self, request, nid):
        detail = models.UserInfo.objects.filter(id=nid).first()
        return render(request, 'userdetail.html', {"detail":detail})


class DelUser(View):

    def get(self, request, nid):
        models.UserInfo.objects.filter(id=nid).delete()
        return redirect("/cmdb/user_info")


class EditUser(View):

    def get(self, request, nid):
        detail = models.UserInfo.objects.filter(id = nid).first()
        return render(request, 'edituser.html',{"detail":detail})

    def post(self, request, nid):
        usr = request.POST.get("username")
        pwd = request.POST.get("password")
        obj = models.UserInfo.objects.filter(id=nid).first()
        obj.username = usr
        obj.password = pwd
        obj.save()
        return redirect("/cmdb/user_info")