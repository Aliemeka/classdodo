from rest_framework.serializers import ModelSerializer
from .models import Subject, Question, Option

class OptionSerializer(ModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'question', 'is_answer')

class QuestionSerializer(ModelSerializer):
    options = OptionSerializer(many=True, required=False)

    class Meta:
        model = Question
        fields = '__all__'

class SubjectSerializers(ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True, required=False)

    class Meta:
        model = Subject
        fields = '__all__'


