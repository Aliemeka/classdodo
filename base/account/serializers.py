from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import AppUser

class UserSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher')


class CustomRegisterSerializer(RegisterSerializer):
    is_teacher = serializers.BooleanField()
    is_student = serializers.BooleanField()

    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher')