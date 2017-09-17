from django.shortcuts import render
from django.views import View
from hms import models
# Create your views here.

class Business(View):

    def get(self,request):
        objs = models.Business.objects.all()
        values = models.Business.objects.all().values('id', 'caption')
        datas = models.Business.objects.all().values_list('id', 'caption')
        return render(request,'business.html',{"objs":objs, "values":values, "datas":datas})


class Host(View):

    def get(self, request):
        datas = models.Host.objects.all()
        values = models.Host.objects.all().values('nid','hostname','ip','port', 'business_id', 'business__caption')


        return render(request, 'host.html', {"datas":datas,"values":values})
