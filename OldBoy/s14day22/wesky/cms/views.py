from django.shortcuts import render, HttpResponse, redirect
from django.views import View
# Create your views here.

from cms import models

class Index(View):

    def get(self, request):
        request.FILES.get()


        return HttpResponse