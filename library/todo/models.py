from django.db import models

from authapp.models import User


# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=128, blank=True, help_text='Заголовок проекта')
    link = models.URLField(max_length=200, null=True, blank=True, help_text='Ссылка на репозиторий GitHub')
    users = models.ManyToManyField(User)


class TODO(models.Model):
    text = models.TextField(max_length=1500)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    create_date = models.DateField(auto_now_add=True)
    update_date = models.DateField()
    users = models.ForeignKey(User, models.PROTECT)
    is_active = models.BooleanField(default=True)