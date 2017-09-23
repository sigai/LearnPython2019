from django.shortcuts import render, HttpResponse
from django.views import View
from django.urls import reverse


from utils.pagination import Page
# Create your views here.


class Index(View):

    def get(self, request):
        data = reverse("cms:index")
        return render(request, 'index.html',{"data":data})


LIST = [i for i in range(200)]


class UserList(View):

    def get(self, request):
        cp = int(request.GET.get("p", 1))
        total = len(LIST)

        obj = Page(cp,total)
        data = LIST[obj.start:obj.end]

        pages = obj.pagination("/cms/user_list/")
        return render(request, 'user_list.html', {"li": data,"pages":pages})


