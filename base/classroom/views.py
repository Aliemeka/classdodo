from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView, ListCreateAPIView, RetrieveAPIView
from .models import Subject, Question, Option
from .serializers import SubjectSerializers, QuestionSerializer, OptionSerializer
# Create your views here.

class SubjectListApiView(ListAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializers

class SubjectDetailApiView(RetrieveAPIView):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializers




