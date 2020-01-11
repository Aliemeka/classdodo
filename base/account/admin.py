from django.contrib import admin
from .models import AppUser, Student, Teacher
# Register your models here.

admin.site.register(AppUser)
admin.site.register(Student)
admin.site.register(Teacher)