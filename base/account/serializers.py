from rest_framework.serializers import ModelSerializer

from .models import AppUser, Teacher, Student

class UserSerializer(ModelSerializer):
    class Meta:
        model = AppUser
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'is_student', 'is_teacher')


class TeacherSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        field = ('id','user')

class StudentSerializer(ModelSerializer):
    class Meta:
        model = Student
        field = ('id','user')