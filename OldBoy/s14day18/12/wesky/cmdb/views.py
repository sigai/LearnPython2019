from django.shortcuts import render, HttpResponse, redirect
from pprint import pprint
# Create your views here.

def login(request):
    # with open("templates/login.html", 'r', encoding='utf-8') as f:
    #     data = f.read()
    error_msg = ""
    if request.method == "POST":
        usr = request.POST.get("usr", None)
        pwd = request.POST.get("pwd", None)

        if usr == "root" and pwd == "toor":
            return redirect("http://www.google.com/ncr")
        else:
            error_msg = "用户名或密码错误"

    print(request.POST, type(request.POST))
    return render(request, 'login.html', {"error_msg":error_msg})
