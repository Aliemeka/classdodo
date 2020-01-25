from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics

from .models import Record, Result, Test_score
from .serializers import RecordSerializer, ResultSerializer, TestScoreSerializer

class RecordViewSet(viewsets.ModelViewSet):
    serializer_class = RecordSerializer
    queryset = Record.objects.all()


class ResultListApiView(generics.ListCreateAPIView):
    serializer_class = ResultSerializer
    def get_queryset(self):
        queryset = Result.objects.filter(record_id=self.kwargs["pk"])
        return queryset


class ResultDetailApiView(generics.RetrieveAPIView):
    serializer_class = ResultSerializer
    queryset = Result.objects.all()

class TestScoreListApiView(generics.ListCreateAPIView):
    serializer_class = TestScoreSerializer
    def get_queryset(self):
        queryset = Test_score.objects.filter(result_id=self.kwargs["pk"])
        return queryset