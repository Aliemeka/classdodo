from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Subject, Question, Test

class QuestionSererializer(ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class TestSerializer(ModelSerializer):
    questions = serializers.SerializerMethodField()

    class Meta:
        model = Test
        fields = ('id','test_title', 'subject', 'time_created', 'questions')
    
    def get_questions(self, obj):
        questions = QuestionSererializer(obj.questions.all(), many=True).data
        return questions


class SubjectSerializer(ModelSerializer):
    tests = serializers.SerializerMethodField()

    class Meta:
        model = Subject
        fields = ('id', 'subject_name', 'teacher', 'tests')
    
    def get_tests(self, obj):
        tests = TestSerializer(obj.tests.all(), many=True).data
        return tests