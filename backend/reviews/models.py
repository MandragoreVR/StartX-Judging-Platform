from django.db import models

class Interview(models.Model):
    company = models.CharField(max_length=100)
    date = models.CharField(max_length=16) # YYYY-MM-DD-HH:MM
    pc_global_score = models.FloatField(default=-1)
    td_global_score = models.FloatField(default=-1)
    ex_global_score = models.FloatField(default=-1)
    id_global_score = models.FloatField(default=-1)

class Review(models.Model):
    interview_id = models.ForeignKey(Interview, on_delete=models.CASCADE)
    judge_name = models.CharField(max_length=100)
    pc_score = models.FloatField()
    pc_debrief = models.CharField(max_length=500)
    td_score = models.FloatField()
    td_debrief = models.CharField(max_length=500)
    ex_score = models.FloatField()
    ex_debrief = models.CharField(max_length=500)
    id_score = models.FloatField()
    id_debrief = models.CharField(max_length=500)
    overall_debrief = models.CharField(max_length=500)
    publication_date = models.CharField(max_length=16) # YYYY-MM-DD-HH:MM