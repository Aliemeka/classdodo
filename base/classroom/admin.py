from django.contrib import admin
from .models import Subject, Question, Option

# Register your models here.
admin.site.register(Subject)
admin.site.register(Question)
admin.site.register(Option)