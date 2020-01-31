from rest_framework.serializers import ModelSerializer, StringRelatedField
from rest_framework import serializers
from .models import Subject, Question, Test, Choice
from users.models import AppUser


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

    def create(self, request):
        data = request.data
        # print(data)

        teacher = AppUser.objects.get(username=data['teacher'])
        subject = Subject.objects.get_or_create(subject_name=data['subject_name'], teacher=teacher)
        subject = subject[0]
        subject.save()

        for t in data['tests']:
            newTest = Test()
            newTest.test_title = t['test_title']
            newTest.order = int(t['order'])
            newTest.subject = subject
            newTest.save()

            for q in t['questions']:
                newQuestion = Question()
                newQuestion.question = q['question']
                newQuestion.order = int(q['order'])
                newQuestion.test = newTest
                newQuestion.save()
                

                for c in q['options']:
                    newChoice = Choice()
                    newChoice.choice = c
                    newChoice.save()
                    newQuestion.options.add(newChoice)

                newQuestion.answer = Choice.objects.get(choice=q['answer'])
                newQuestion.save()

        
        return subject

        



            

