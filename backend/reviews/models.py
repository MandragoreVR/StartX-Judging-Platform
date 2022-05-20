from django.db import models

class Interview(models.Model):
    company = models.CharField(max_length=100)
    date = models.DateField()
    pc_global_score = models.IntegerField(default=-1)
    td_global_score = models.IntegerField(default=-1)
    ex_global_score = models.IntegerField(default=-1)
    id_global_score = models.IntegerField(default=-1)

class Review(models.Model):
    interview_id = models.ForeignKey(Interview, on_delete=models.CASCADE)
    judge_name = models.CharField(max_length=100)
    pc_score = models.IntegerField()
    pc_debrief = models.CharField(max_length=500)
    td_score = models.IntegerField()
    td_debrief = models.CharField(max_length=500)
    ex_score = models.IntegerField()
    ex_debrief = models.CharField(max_length=500)
    id_score = models.IntegerField()
    id_debrief = models.CharField(max_length=500)
    publication_date = models.DateField(auto_now_add=True)