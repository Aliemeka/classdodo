from django.db import models
from users.models import AppUser
from classroom.models import Subject, Test


class Record(models.Model):
    student = models.OneToOneField(AppUser, on_delete=models.CASCADE, related_name='record')

    def __str__(self):
        return f"{self.student.first_name}'s record"

    def __unicode__(self):
        return f"{self.student.first_name}'s record"

class Result(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    record = models.ForeignKey(Record, on_delete=models.CASCADE, related_name='results')
    average_score = models.FloatField(default=0)
    success_rate = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.subject.subject_name} result: {self.average_score}'

    def __unicode__(self):
        return f'{self.subject.subject_name} result: {self.average_score}'


class Test_score(models.Model):
    score = models.IntegerField()
    result = models.ForeignKey(Result, on_delete=models.CASCADE, related_name='test_scores')
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def __str__(self):
        return f'score aggregate: {self.score}'

    def __unicode__(self):
        return f'score aggregate: {self.score}'