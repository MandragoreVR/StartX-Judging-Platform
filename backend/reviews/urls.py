from venv import create
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_interviews, name="main"),
    path('create_interview', views.create_interview, name="create_interview"),
]