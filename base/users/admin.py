from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group
from .models import AppUser, Teacher, Student


class UserAdmin(BaseUserAdmin):
    add_fieldsets=(
        (None, {
            'fields': ('first_name', 'last_name', 'username', 'email', 'is_student', 'is_teacher', 'password1', 'password2')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    fieldsets = (
        (None, {
            'fields': ('first_name', 'last_name', 'username', 'email', 'is_student', 'is_teacher', 'password')
        }),
        ('Permissions', {
            'fields': ('is_superuser', 'is_staff')
        })
    )
    list_display = ['first_name', 'last_name', 'username', 'is_student', 'is_teacher']
    order = ('first_name')

admin.site.register(AppUser, UserAdmin)
admin.site.register(Teacher)
admin.site.register(Student)
admin.site.unregister(Group)