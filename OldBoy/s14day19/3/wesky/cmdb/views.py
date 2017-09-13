from django.shortcuts import render, HttpResponse, redirect

# Create your views here.


def root(request):
    return HttpResponse("<h1>Root!</h1>")

def index(request):
    return HttpResponse("Index")


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