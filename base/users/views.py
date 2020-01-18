from rest_framework import viewsets

from .models import AppUser
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = AppUser.objects.all()