from django.shortcuts import render, HttpResponse, redirect
from django.views import View
# Create your views here.

from cms import models


class Index(View):

    def get(self, request):
        if request.session:
            if request.session["is_login"]:
                return HttpResponse(request.session["username"])
        else:
            return redirect(request, '/login/')


class Login(View):

    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        usr = request.POST.get("usr")
        pwd = request.POST.get("pwd")

        if usr == "root" and pwd == "toor":
            request.session["username"] = usr
            request.session["is_login"] = True
            return redirect("/index/")
        else:
            return redirect(request, "/login/")
