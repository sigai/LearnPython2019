import os

from django.shortcuts import render, HttpResponse, redirect
from django.views import View
from cmdb import models
# Create your views here.


def root(request):
    return HttpResponse("<h1>Root!</h1>")


def login(request):
    if request.method == "POST":
        usr = request.POST.get("usr")
        pwd = request.POST.get("pwd")
        if usr == "root" and pwd == "toor":
            return redirect("/index/")
        else:
            return render(request, 'login.html')
    elif request.method == "GET":
        return render(request, 'login.html')
    else:
        return redirect("/index/")


def signup(request):
    if request.method == "POST":
        usr = request.POST.get("username")
        pwd = request.POST.get("password")
        gen = request.POST.get("gender")
        idols = request.POST.getlist("idol")
        cities = request.POST.getlist("city")
        file_obj = request.FILES.get("fname")
        upload_path = os.path.join("upload", file_obj.name)
        with open(upload_path,'wb') as f:
            for each in file_obj.chunks():
                f.write(each)

        print(usr, pwd, gen, idols, cities, file_obj.name)
        return redirect("/login/")

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
        return render(request, 'index.html', {"user_list": USER_DICT})

class Detail(View):

    def get(self, request):
        nid = request.GET.get("nid")
        detail = USER_DICT[nid]
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
