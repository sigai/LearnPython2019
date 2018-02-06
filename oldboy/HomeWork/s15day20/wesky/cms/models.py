from django.db import models


# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=128)
    price = models.PositiveSmallIntegerField(null=True)
    authors = models.ManyToManyField("Author")
    publisher = models.ForeignKey("Publisher")
    publish_date = models.DateField()

    def __str__(self):
        return self.name


class Author(models.Model):
    name = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
    def __str__(self):
        return self.name


class Publisher(models.Model):
    name = models.CharField(max_length=128, unique=True)
    website = models.URLField(unique=True)
    def __str__(self):
        return self.name
