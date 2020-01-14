from django.shortcuts import render
from rest_framework import viewsets

from .models import Subject
from .serializers import SubjectSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
