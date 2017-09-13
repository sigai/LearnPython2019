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
            return redirect("/home/")
        else:
            error_msg = "用户名或密码错误"

    print(request.POST, type(request.POST))
    return render(request, 'login.html', {"error_msg":error_msg})

USER_LIST = [
    {'username':"a","gender":"男","email":"a@qq.com"},
]
for i in range(5):
    temp = {'username':f"a{i}","gender":"男","email":f"a{i}@qq.com"}
    USER_LIST.append(temp)

def home(request):
    if request.method == "POST":
        username = request.POST.get("username")
        gender = request.POST.get("gender")
        email = request.POST.get("email")
        USER_LIST.append({'username':username,"gender":gender,"email":email})
    return render(request, "home.html", {"user_list":USER_LIST})