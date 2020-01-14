from django.contrib import admin
from .models import Subject, Test, Question, Choice

admin.site.register(Subject)
admin.site.register(Test)
admin.site.register(Question)
admin.site.register(Choice)
