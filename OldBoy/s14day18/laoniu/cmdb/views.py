from django.shortcuts import render

# Create your views here.
from django.shortcuts import HttpResponse
from django.shortcuts import render
from django.shortcuts import redirect


def cmdb(request):
    return HttpResponse("<h1>CMDB</h1>")


def login(request):
    error_msg =''
    if request.method == "POST":
        username = request.POST.get('u',None)
        password = request.POST.get('p',None)
        print(username,password)
        if username == 'administrator' and password == "wangyanjing":
            return render(request, 'home.html', {})
        else:
            error_msg = '用户名或密码错误'

    return render(request, 'login.html', {'error_msg': error_msg})

USER_LIST = [
    {'username':'xijinping','email':'xijinping@gov.cn','gender':'M','job':'总统'}
]
# for index in range(100):
#     tmp = {'username': 'xijinping' + str(index).rjust(3, '0'), 'email': 'xijinping@gov.cn', 'gender': 'M', 'job': '总统'}
#     USER_LIST.append(tmp)

def home(request):
    if request.method == "POST":
        u = request.POST.get("username")
        e = request.POST.get("email")
        g = request.POST.get("gender")
        j = request.POST.get("job")
        tmp = {'username':u,'email':e,'gender':g,'job':j}
        USER_LIST.append(tmp)

    return render(request, 'home.html', {'userlist':USER_LIST})