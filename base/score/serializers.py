from rest_framework.serializers import ModelSerializer, StringRelatedField
from rest_framework import serializers
from .models import Record, Result, Test_score
from users.models import AppUser
from classroom.models import Subject, Test


class StringSerializers(StringRelatedField):
    def to_internal_value(self, value):
        return value


class TestScoreSerializer(ModelSerializer):
    test = StringSerializers(many=False)

    class Meta:
        model = Test_score
        fields = '__all__'
    
    def create(self, request):
        data = request.data
        print(data)
        
        student = AppUser.objects.get(username=data['username'])
        record = Record.objects.get_or_create(student=student)
        if record[1]:
            record = record[0]
            record.student = student
            record.save()
        else:
            record = record[0]
            record.student = student
            record.save()
        subject = Subject.objects.get(id=data['subjectId'])
        result = Result.objects.get_or_create(subject=subject, record=record)
        if result[1]:
            result = result[0]
            result.record = record
            result.save()
        else:
            result = result[0]
            result.record = record

        result.save()

        test = Test.objects.get(id=data['testId'])
        testScore = Test_score()
        testScore.test = test
        testScore.result = result

        questions = [q for q in test.questions.all()]
        answers = [data['answers'][a] for a in data['answers']]

        correct_answers = 0
        for i in range(len(questions)):
            if questions[i].answer.choice == answers[i]:
                correct_answers += 1
            i += 1
        score = (correct_answers/len(questions)) * 5
        testScore.score = score
        testScore.save()


        allTest = Test_score.objects.all()
        totalScore = 0
        passed_test_count = 0
        test_count = 0

        for i in range(len(allTest)):
            if allTest[i].result == result:
                print(allTest[i].result)
                totalScore += (allTest[i].score/5) * 100
                test_count += 1
                if allTest[i].score >= 3:
                    passed_test_count += 1
            
            i += 1
        
        average = totalScore/test_count
        success_rate = (passed_test_count/test_count) * 100

        result.average_score = average
        result.success_rate = int(success_rate)
        result.save()

        return testScore
        



class ResultSerializer(ModelSerializer):
    subject = StringSerializers(many=False)
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