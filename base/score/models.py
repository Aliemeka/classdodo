from django.db import models
from account.models import Student
from classroom.models import Subject, Test


class Record(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    def __str__(self):
        return "%s's record" %(student.user.first_name)

    def __unicode__(self):
        return "%s's record" %(student.user.first_name)

class Result(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    record = models.ForeignKey(Record, on_delete=models.CASCADE)
    average_score = models.FloatField(default=0)
    success_rate = models.IntegerField(default=0)

    def __str__(self):
        return '%s result: %f' %(self.subject.subject_name, self.average_score)

    def __unicode__(self):
        return '%s result: %f' %(self.subject.subject_name, self.average_score)


class Test_score(models.Model):
    score = models.IntegerField()
    result = models.ForeignKey(Result, on_delete=models.CASCADE)
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def __str__(self):
        return 'score aggregate: %d' %(self.score)

    def __unicode__(self):
        return 'score aggregate: %d' %(self.score)