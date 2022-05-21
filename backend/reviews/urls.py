from venv import create
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('interview/<int:interview_id>', views.get_one_interview),
    path('interviews', views.manage_interviews),
    path('interviews/<int:interview_id>', views.delete_interview),
    path('review/<int:interview_id>', views.get_reviews),
    path('review', views.create_review),
    path('empty', views.empty_database)
    # path('review_synthesis/<int:interview_id>', views.generate_synthesis),
]