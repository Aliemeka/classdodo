from rest_framework.serializers import ModelSerializer
from .models import Record, Score

class RecordSerializer(ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'

class ScoreSerializer(ModelSerializer):
    class Meta:
        model = Score
        fields = '__all__'