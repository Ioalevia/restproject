from django.contrib import admin

# Register your models here.

from . import models as auth_models

# admin.site.register(todo_models.Users)

@admin.register(auth_models.User)
class TodoUsers(admin.ModelAdmin):
    pass
