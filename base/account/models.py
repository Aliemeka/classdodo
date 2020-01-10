from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class AppUser(AbstractUser):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    is_superuser = models.BooleanField(default=False)
    is_student = models.BooleanField()
    is_teacher = models.BooleanField()


class Teacher(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __unicode__(str):
        return '%s %s' %(self.user.first_name, self.user.last_name)



class Student(models.Model):
    user = models.OneToOneField(AppUser, on_delete=models.CASCADE)

    def __unicode__(str):
        return self.user.first_name + " " + self.user.last_name