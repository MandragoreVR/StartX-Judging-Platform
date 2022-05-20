from django.http import Http404
from django.shortcuts import render
from .models import Interview, Review
from .forms import InterviewForm, ReviewForm
from time import time
import datetime

## Interviews handling

def get_all_interviews(request):
    interviews = Interview.objects.all()
    context = {"interviews": interviews}
    return render(request, "index.html", context)

def get_past_interviews(request):
    interviews = Interview.objects.filter(
        sampledate__lte = datetime.datetime.fromtimestamp(time())
    )
    context = {"interviews": interviews}
    return render(request, "index.html", context)

def get_incoming_interviews(request):
    interviews = Interview.objects.filter(
        sampledata__gte = datetime.datetime.fromtimestamp(time())
    )
    context = {"interviews": interviews}
    return render(request, "index.html", context)

def create_interview(request):
    if request.method == "POST":
        form = InterviewForm(request.POST)
        if form.is_valid():
            form.save()
            return render(request, "index.html", {"form": form})
    else:
        form = InterviewForm()
    return render(request, "index.html", {"form": form})

def delete_interview(request, interview_id):
    try:
        interview = Interview.objects.filter(pk = interview_id).first()
        interview.delete()
    except:
        raise Http404("Interview not found")
    return render(request, "index.html", {})

def get_reviews_from_interview(request, interview_id):
    reviews = Review.objects.filter(interview_id = interview_id)
    context = {"reviews", reviews}
    return render(request, "index.html", context)

def create_review(request):
    if request.method == "POST":
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
        interview = Interview.objects.filter(pk = form.cleaned_data['interview_id']).first()
        reviews = Review.objects.filter(interview_id = form.cleaned_data["interview_id"]).all()
        sums = {"pc": 0, "td": 0, "ex": 0, "id": 0}
        for review in reviews:
            sums["pc"] += review.pc_score
            sums["td"] += review.td_score
            sums["ex"] += review.ex_score
            sums["id"] += review.id_score
        interview.pc_global_score = sums["pc"] / len(reviews)
        interview.td_global_score = sums["td"] / len(reviews)
        interview.ex_global_score = sums["ex"] / len(reviews)
        interview.id_global_score = sums["id"] / len(reviews)
        interview.save()
    return render(request, "index.html", {})
