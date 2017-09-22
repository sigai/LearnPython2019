from django.shortcuts import render, HttpResponse
from django.views import View
from django.urls import reverse
from django.utils.safestring import mark_safe
# Create your views here.


class Index(View):

    def get(self, request):
        data = reverse("cms:index")
        return render(request, 'index.html',{"data":data})


LIST = [i for i in range(200)]
NUM_PER_PAGE = 10
R = 3

class UserList(View):

    def get(self, request):
        cp = int(request.GET.get("p", 1))
        start = (cp - 1) * NUM_PER_PAGE
        end = cp * NUM_PER_PAGE
        # data = LIST[0:10]
        data = LIST[start:end]

        total = len(LIST)

        q, r = divmod(total, NUM_PER_PAGE)
        num_pages = q if r else q + 1

        pl = '<a class="page" href=\"/cms/user_list/?p={n}\">{n}</a>'
        pl_a = '<a class="page active" href=\"/cms/user_list/?p={n}\">{n}</a>'

        if q < NUM_PER_PAGE:
            start_idx = 1
            end_idx = total +1
        else:
            if cp < (R-R//2):
                start_idx = 1
                end_idx = R + 1
            else:
                start_idx = cp - R//2
                end_idx = cp + R//2 +1
                if (cp + R//2) > q:
                    start_idx = q + 1 - R
                    end_idx = q + 1

        pages = "".join([pl.format(n=str(i)) if i != cp else pl_a.format(n=str(i)) for i in range(start_idx,end_idx)])

        prevp = f'<a class="big" href=\"/cms/user_list/?p={cp-1}\">上一页</a>'
        nextp = f'<a class="big" href=\"/cms/user_list/?p={cp+1}\">下一页</a>'
        if cp == 1:
            prevp = f'<a class="big" href=\"javascript:void(0);\">上一页</a>'
        if cp == q:
            nextp = f'<a class="big" href=\"#\">下一页</a>'


        pages = mark_safe(prevp+pages+nextp)
        return render(request, 'user_list.html', {"li": data,"pages":pages})

