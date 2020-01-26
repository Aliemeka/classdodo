from rest_framework.serializers import ModelSerializer, StringRelatedField
from rest_framework import serializers
from .models import Record, Result, Test_score


class StringSerializers(StringRelatedField):
    def to_internal_value(self, value):
        return value


class TestScoreSerializer(ModelSerializer):
    class Meta:
        model = Test_score
        fields = '__all__'


class ResultSerializer(ModelSerializer):
    test_scores = serializers.SerializerMethodField()

    class Meta:
        model = Result
        fields = '__all__'
    
    def get_test_scores(self, obj):
        test_scores = TestScoreSerializer(obj.test_scores.all(), many=True).data
        return test_scores

class RecordSerializer(ModelSerializer):
    student = StringSerializers(many=False)
    results = serializers.SerializerMethodField()

    class Meta:
        model = Record
        fields = '__all__'

    def get_results(self, obj):
        results = ResultSerializer(obj.results.all(), many=True).data
        return results