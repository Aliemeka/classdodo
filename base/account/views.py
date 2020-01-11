from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import UserSerializer
from .models import AppUser 

# Create your views here.

class UsersListApiView(ListAPIView):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer

class UserDetialsApiView(RetrieveAPIView):
    queryset = AppUser.objects.all()
    serializer_class = UserSerializer   

