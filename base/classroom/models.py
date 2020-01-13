from django.db import models
from account.models import Teacher
# Create your models here.

class Subject(models.Model):
    subject_name = models.CharField(max_length=30)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.subject_name} by {self.teacher.user.get_fullname()}'

    def __unicode__(self):
        return f'{self.subject_name} by {self.teacher.user.get_fullname()}'

class Test(models.Model):
    test_number = models.IntegerField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Test {test_number} on {self.subject.subject_name}'

    def __unicode__(self):
        return f'Test {test_number} on {self.subject.subject_name}'

class Question(models.Model):
    question = models.TextField()
    test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.question}'

    def __unicode__(self):
        return f'{self.question}'


class Option(models.Model):
    option = models.CharField(max_length=100)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    is_answer = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.option}'

    def __unicode__(self):
        return f'{self.option}'

