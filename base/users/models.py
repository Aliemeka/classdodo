from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class AppUser(AbstractUser):
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)

    def __str__(self):
        return '%s %s' %(self.first_name, self.last_name)

class Teacher(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)
    

class Student(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)
    
    def __unicode__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)