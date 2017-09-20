from django.db import models

# Create your models here.

class Host(models.Model):

    nid = models.AutoField(primary_key=True)
    hostname = models.CharField(max_length=32, db_index=True)
    ip = models.GenericIPAddressField(protocol='ipv4',db_index=True)
    port = models.IntegerField()

    business = models.ForeignKey(to="Business", to_field='id')


class Business(models.Model):

    caption = models.CharField(max_length=32)
    code = models.CharField(max_length=32, null=True, default="SA")


class Application(models.Model):

    name = models.CharField(max_length=32)
    r = models.ManyToManyField("Host")


# class HostToApp(models.Model):
#
#     h_obj = models.ForeignKey("Host", to_field="nid")
#     A_obj = models.ForeignKey("Application", to_field="id")