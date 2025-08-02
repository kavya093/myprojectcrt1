from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    rollno = models.IntegerField()
    slug = models.SlugField(unique=True, null=True, blank=True)

    def __str__(self):
        return f"{self.name}-{self.rollno}"
class Patient(models.Model):
    name=models.CharField(max_length=30)
    no=models.IntegerField()
    slug=models.SlugField(unique=True, null=True, blank=True),
    photo=models.ImageField(upload_to='photos/',null=True)
    
    def __str__(self):
        return f"{self.name}-{self.no}"