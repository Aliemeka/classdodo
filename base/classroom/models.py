from django.db import models
from users.models import AppUser
# Create your models here.

class Subject(models.Model):
    subject_name = models.CharField(max_length=30)
    teacher = models.ForeignKey(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.subject_name}'

    def __unicode__(self):
        return f'{self.subject_name}'


class Test(models.Model):
    test_title = models.CharField(max_length=20, default="")
    order = models.IntegerField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='tests')
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.test_title}'

    def __unicode__(self):
        return f'{self.test_title}'


class Choice(models.Model):
    choice = models.CharField(max_length = 100)

    def __str__(self):
        return f'{self.choice}'


class Question(models.Model):
    question = models.TextField()
    order = models.SmallIntegerField()
    test = models.ForeignKey(Test, on_delete=models.CASCADE, related_name='questions')
    options = models.ManyToManyField(Choice)
    answer = models.ForeignKey(Choice, on_delete=models.CASCADE, null=True, related_name='answer')

    def __str__(self):
        return f'{self.question}'

    def __unicode__(self):
        return f'{self.question}'

