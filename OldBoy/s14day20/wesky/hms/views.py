import json

from django.shortcuts import render, redirect, HttpResponse
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
        values_list = models.Host.objects.all().values_list('nid','hostname','ip','port', 'business_id', 'business__caption')
        business_info = models.Business.objects.all()


        return render(request, 'host.html', {"datas":datas,"values":values, "values_list":values_list,"business_info":business_info})

    def post(self, request):
        hostname = request.POST.get("hostname")
        ip = request.POST.get("ip")
        port = request.POST.get("port")
        business_id = request.POST.get("business_id")

        print(hostname, ip, port, business_id)

        models.Host.objects.create(hostname=hostname, ip=ip, port=port, business_id=business_id)

        return redirect("/hms/host/")


class Backdoor(View):

    def post(self, request):
        res = {"status":True, "error":None,"data":None}
        try:
            hostname = request.POST.get("hostname")
            ip = request.POST.get("ip")
            port = request.POST.get("port")
            business_id = request.POST.get("business_id")

            if hostname and len(hostname) > 5:
                models.Host.objects.create(hostname=hostname, ip=ip, port=port, business_id=business_id)
            else:
                res["status"] = False
                res["error"] = "Too Short"
        except Exception as e:
            res["status"] = False
            res["error"] = str(e)

        finally:
            return HttpResponse(json.dumps(res))


class Door(View):

    def post(self, request):
        res = {"status":True, "error":None,"data":None}
        try:
            nid = request.POST.get("hid")
            hostname = request.POST.get("hostname")
            ip = request.POST.get("ip")
            port = request.POST.get("port")
            business_id = request.POST.get("business_id")

            if hostname and len(hostname) > 5:
                models.Host.objects.filter(nid=nid).update(hostname=hostname, ip=ip, port=port, business_id=business_id)
                res["data"] = {"nid":nid}
            else:
                res["status"] = False
                res["error"] = "Too Short"
        except Exception as e:
            res["status"] = False
            res["error"] = str(e)

        finally:
            return HttpResponse(json.dumps(res))


class Del(View):

    def post(self, request):
        res = {"status":True, "error":None,"data":None}
        try:
            nid = request.POST.get("hid")
            models.Host.objects.filter(nid=nid).delete()
            res["data"] = {"nid":nid}
        except Exception as e:
            res["status"] = False
            res["error"] = str(e)
        finally:
            return HttpResponse(json.dumps(res))


class App(View):

    def get(self, request):
        objs = models.Application.objects.all()
        hosts = models.Host.objects.all()
        return render(request, 'app.html', {"objs": objs, "hosts":hosts})

    def post(self, request):

        res = {"status": True, "data": None, "e": None}
        name = request.POST.get("name")
        hosts = request.POST.getlist("hosts")

        if name and hosts:
            try:
                new = models.Application.objects.create()
                new.name = name
                new.r.set(hosts)
                new.save()
            except Exception as e:
                res["e"] = str(e)
            else:
                res["data"] = "ok"
        else:
            res["status"] = False

        return HttpResponse(json.dumps(res))

class Delrhost(View):

    def post(self, request):
        hid = request.POST.get("hid")
        appid = request.POST.get("appid")

        obj = models.Application.objects.get(id=appid)
        obj.r.remove(hid)
        obj.save()

        return HttpResponse("ok")

class Edit(View):

    def post(self,request):
        res = {"status":True}
        appid = request.POST.get('appid')
        hosts = request.POST.getlist('hosts')
        print(hosts)
        obj = models.Application.objects.get(id=appid)
        obj.r.set(hosts)
        obj.save()

        return HttpResponse(json.dumps(res))
