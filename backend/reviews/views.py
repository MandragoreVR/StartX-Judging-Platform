from django.http import Http404, JsonResponse
from django.shortcuts import render
from .models import Interview, Review
from .forms import InterviewForm, ReviewForm
from time import time
from .serializers import InterviewSerializer, ReviewSerializer
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view

## Interviews handling

@api_view(["GET"])
def get_one_interview(_, interview_id):
    try:
        interview = Interview.objects.get(pk=interview_id)
    except Interview.DoesNotExist:
        return JsonResponse({'message': 'The interview does not exist'}, status=status.HTTP_404_NOT_FOUND)

    interview_serializer = InterviewSerializer(interview)
    return JsonResponse(interview_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def manage_interviews(request):
    if request.method == "GET":
        interviews = Interview.objects.all()
        interviews_serializer = InterviewSerializer(interviews, many=True)
        return JsonResponse(interviews_serializer.data, safe=False)
    elif request.method == "POST":
        interview_data = JSONParser().parse(request)
        interview_serializer = InterviewSerializer(data = interview_data)
        if interview_serializer.is_valid():
            print(interview_serializer)
            interview_serializer.save()
            return JsonResponse(interview_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(interview_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def delete_interview(_, interview_id):
    try:
        interview = Interview.objects.get(pk=interview_id)
    except Interview.DoesNotExist:
        return JsonResponse({'message': 'The interview does not exist'}, status=status.HTTP_404_NOT_FOUND)
    interview.delete()
    return JsonResponse({'message': 'Interview was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

## Reviews handling

@api_view(["GET"])
def get_reviews(_, interview_id):
    try:
        _ = Interview.objects.get(pk=interview_id)
    except Interview.DoesNotExist:
        return JsonResponse({'message': 'The interview does not exist'}, status=status.HTTP_404_NOT_FOUND)

    reviews = Review.objects.all()
    reviews = reviews.filter(interview_id = interview_id)
    reviews_serializer = ReviewSerializer(reviews, many=True)
    return JsonResponse(reviews_serializer.data, safe=False)

@api_view(["POST"])
def create_review(request):
    interview_id = request.data["interview_id"]
    try:
        interview = Interview.objects.get(pk=interview_id)
    except Interview.DoesNotExist:
        return JsonResponse({'message': 'The interview does not exist'}, status=status.HTTP_404_NOT_FOUND)
    print(request)
    review_data = JSONParser().parse(request)
    review_serializer = ReviewSerializer(data = review_data)
    if review_serializer.is_valid():
        review_serializer.save()

        # Computation of the new mean scores
        reviews = Review.objects.all()
        reviews = reviews.filter(interview_id = interview_id)
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
        return JsonResponse(review_serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(review_serializer.errors, status=status.HTTP_400_BAD_REQUEST)