from django.shortcuts import render, HttpResponse
from django.views import View
from django.urls import reverse
from pprint import pprint
# Create your views here.


class Index(View):

    def get(self, request):
        data = reverse("hms:index")

        return render(request, 'index.html',{"data":data})
