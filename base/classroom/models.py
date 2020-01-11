from django.db import models
from account.models import Teacher

# Create your models here.
class Subject(models.Model):
    subject_name = models.CharField(max_length=20)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)

    def __str__(self):
        return '%s by %s' %(self.subject_name, self.teacher.user.get_full_name())
    
    def __unicode__(self):
        return self.subject_name

    class Meta:
        verbose_name = ('subject')
        verbose_name_plural = ('subjects')
    


class Question(models.Model):
    question = models.TextField()
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    def __unicode__(self):
        return self.question
    
    def __str__(self):
        return self.question
    

    class Meta:
        verbose_name = ('question')
        verbose_name_plural = ('questions')

class Option(models.Model):
    option = models.CharField(max_length=120)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    is_answer = models.BooleanField(default=False)

    def __unicode__(self):
        return self.option
    
    def __str__(self):
        return self.option

    class Meta:
        verbose_name = ('answer')
        verbose_name_plural = ('answers')