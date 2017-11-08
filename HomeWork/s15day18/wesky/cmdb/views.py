from django.shortcuts import render, redirect, HttpResponse
from django.views import View
# Create your views here.


class Login(View):

    def get(self, request):
        return render(request, 'login.html')


class SignUp(View):

    def get(self, request):
        return render(request, 'signup.html')