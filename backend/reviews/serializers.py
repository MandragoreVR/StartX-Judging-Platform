from rest_framework import serializers
from .models import Interview, Review

class InterviewSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    pc_global_score = serializers.IntegerField(default = -1, initial = -1)
    td_global_score = serializers.IntegerField(default = -1, initial = -1)
    ex_global_score = serializers.IntegerField(default = -1, initial = -1)
    id_global_score = serializers.IntegerField(default = -1, initial = -1)
    class Meta:
        model = Interview
        fields = (
            'id',
            'company',
            'date',
            'pc_global_score',
            'td_global_score',
            'ex_global_score',
            'id_global_score'
        )

class ReviewSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Review
        fields = (
            'id',
            'interview_id',
            'judge_name',
            'pc_score',
            'pc_debrief',
            'td_score',
            'td_debrief',
            'ex_score',
            'ex_debrief',
            'id_score',
            'id_debrief',
            'overall_debrief',
            'publication_date',
        )