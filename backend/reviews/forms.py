from django import forms
from .models import Interview, Review

class InterviewForm(forms.ModelForm):
    class Meta:
        model = Interview
        fields = ("company", "date")
        labels = {
            "company": "Name of the company",
            "date": "Date of the interview"
        }

class ReviewForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = (
            "interview_id",
            "judge_name",
            "pc_score",
            "pc_debrief",
            "td_score",
            "td_debrief",
            "ex_score",
            "ex_debrief",
            "id_score",
            "id_debrief",
        )
        labels = {
            "interview_id": "ID of the interview in database",
            "judge_name": "Name of the judge",
            "pc_score": "Score for Passion and Commitment",
            "pc_debrief": "Comment on Passion and Commitment",
            "td_score": "Score for Team Dynamics",
            "td_debrief": "Comment on Team Dynamics",
            "ex_score": "Score for Ability to Execute",
            "ex_debrief": "Comment on Ability to Execute",
            "id_score": "Score for Idea",
            "id_debrief": "Comment on Idea",
        }