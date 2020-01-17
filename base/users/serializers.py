from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from .models import AppUser
#from score.serializers import RecordSerializer

class UserSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher')

    # def get_record(obj, self):
    #     users = AppUser.objects.all()
    #     for user in users:
    #         if user.is_student:
    #             record = RecordSerializer(obj.record.all(), many=False).data
    #             return record

class CustomRegisterSerializer(RegisterSerializer):
    is_teacher = serializers.BooleanField()
    is_student = serializers.BooleanField()

    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher')