from django.shortcuts import render
from rest_framework import viewsets

from .models import Subject, Test
from .serializers import SubjectSerializer, TestSerializer

class SubjectViewSet(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

class TestViewSet(viewsets.ModelViewSet):
    serializer_class = TestSerializer
    queryset = Test.objects.all()