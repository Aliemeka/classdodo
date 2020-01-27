from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST

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

class TestScoreDetailView(generics.RetrieveAPIView):
    serializer_class = TestScoreSerializer
    queryset = Test_score.objects.all()


class TestScoreListView(generics.ListAPIView):
    serializer_class = TestScoreSerializer
    queryset = Test_score.objects.all()


class TestScoreCreateListView(generics.CreateAPIView):
    serializer_class = TestScoreSerializer
    queryset = Test_score.objects.all()

    def create(self, request):
        serializer = TestScoreSerializer(data=request.data)
        serializer.is_valid()
        test = serializer.create(request)
        if test:
            return Response(status=HTTP_201_CREATED)
        return Response(status=HTTP_400_BAD_REQUEST)
