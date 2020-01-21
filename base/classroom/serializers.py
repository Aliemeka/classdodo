from rest_framework.serializers import ModelSerializer, StringRelatedField
from rest_framework import serializers
from .models import Subject, Question, Test


class StringSerializers(StringRelatedField):
    def to_internal_value(self, value):
        return value

class QuestionSerializer(ModelSerializer):
    options = StringSerializers(many=True)
    answer = StringSerializers(many=False)  
   
    class Meta:
        model = Question
        fields = ('id', 'order', 'question', 'options', 'test', 'answer')


class TestSerializer(ModelSerializer):
    questions = serializers.SerializerMethodField()

    class Meta:
        model = Test
        fields = ('id','test_title', 'order', 'subject', 'time_created', 'questions')
    
    def get_questions(self, obj):
        questions = QuestionSerializer(obj.questions.all(), many=True).data
        return questions


class SubjectSerializer(ModelSerializer):
    tests = serializers.SerializerMethodField()
    teacher = StringSerializers(many=False) 

    class Meta:
        model = Subject
        fields = ('id', 'subject_name', 'teacher', 'tests')
    
    def get_tests(self, obj):
        tests = TestSerializer(obj.tests.all(), many=True).data
        return tests