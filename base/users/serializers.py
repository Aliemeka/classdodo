from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from .models import AppUser

class UserSerializer(ModelSerializer):

    class Meta:
        model = AppUser
        fields = ('id','first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher', 'record')


class CustomRegisterSerializer(RegisterSerializer):
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    is_teacher = serializers.BooleanField()
    is_student = serializers.BooleanField()

    class Meta:
        model = AppUser
        fields = ('first_name', 'last_name', 'email', 'username', 'password', 'is_student', 'is_teacher')
    
    def get_cleaned_data(self):
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'email': self.validated_data.get('email', ''),
            'is_student': self.validated_data.get('is_student', ''),
            'is_teacher': self.validated_data.get('is_teacher', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.first_name = self.cleaned_data.get('first_name')
        user.last_name = self.cleaned_data.get('last_name')
        user.is_student = self.cleaned_data.get('is_student')
        user.is_teacher = self.cleaned_data.get('is_teacher')
        user.save()
        adapter.save_user(request, user, self)
        return user

class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('key', 'user', 'user_type')

    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data
        first_name = serializer_data.get('first_name')
        last_name = serializer_data.get('last_name')
        is_student = serializer_data.get('is_student')
        is_teacher = serializer_data.get('is_teacher')
        record = serializer_data.get('record')
        return{
            'first_name': first_name,
            'last_name': last_name,
            'is_student': is_student,
            'is_teacher': is_teacher,
            'record': record
        }