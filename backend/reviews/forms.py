from django import forms
from models import Interview, Review

class InterviewForm(forms.ModelForm):
    class Meta:
        model = Interview
        fields = ("company", "date")

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