from django.db import models
from account.models import Student
from classroom.models import Subject

# Create your models here.

class Record(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)

    def __str__(self):
        return "%s's record" %(self.student.user.first_name)

class Score(models.Model):
    score = models.IntegerField()
    record = models.ForeignKey(Record, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    def __str__(self):
        return "%s score %d" %(self.subject.subject_name, self.score)
