from django.shortcuts import render

# Create your views here.

from django.shortcuts import HttpResponse

def cmdb(request):
    return HttpResponse("<h1>CMDB</h1>")