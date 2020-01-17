from django.contrib import admin
from .models import AppUser, Teacher, Student

admin.site.register(AppUser)
admin.site.register(Teacher)
admin.site.register(Student)