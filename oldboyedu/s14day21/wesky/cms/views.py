from django.shortcuts import render, HttpResponse, redirect
from django.views import View
from django.urls import reverse
from django.utils.decorators import method_decorator

from utils.pagination import Page
# Create your views here.


LIST = [i for i in range(2000000)]


class UserList(View):

    def get(self, request):
        cp = int(request.GET.get("p", 1))
        total = len(LIST)
        npp = request.COOKIES.get("npp", 10)
        if npp:
            obj = Page(cp,total,int(npp))
        else:
            obj = Page(cp, total)
        data = LIST[obj.start:obj.end]

        pages = obj.pagination("/cms/user_list/")
        return render(request, 'user_list.html', {"li": data,"pages":pages})


users = {
    "foo": {"pwd": "bar"},
}


class Login(View):

    def get(self, request):
        return render(request,'login.html')

    def post(self, request):

        u = request.POST.get("usr")
        p = request.POST.get("pwd")
        d = users.get(u)
        if not d:
            return render(request, 'login.html')
        if d['pwd'] == p:
            res = redirect("/cms/index/")
            res.set_cookie("usr",u)
            # res.set_signed_cookie()
            return res
        else:
            return render(request, 'login.html')


def auth(func):
    def inner(request,*args,**kwargs):
        u = request.COOKIES.get("usr")
        # request.get_singed_cookies()
        if not u:
            return redirect("/cms/login/")
        res = func(request,*args,**kwargs)
        return res
    return inner


@method_decorator(auth, name='dispatch')
class Index(View):

    def get(self,request):
        u = request.COOKIES.get("usr")
        return render(request, 'index.html', {"data": u})

    def post(self,request):
        pass