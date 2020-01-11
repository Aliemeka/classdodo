from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class AppUser(AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    is_superuser = models.BooleanField(default=False)
    is_student = models.BooleanField(null=True, blank=True)
    is_teacher = models.BooleanField(null=True, blank=True)

    def __str__(self):
        return self.username


class Teacher(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)

    def __unicode__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)



class Student(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __str__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)
    
    def __unicode__(self):
        return '%s %s' %(self.user.first_name, self.user.last_name)