from django.urls import path
from score.views import TestScoreDetailView, TestScoreListView


urlpatterns = [
    path('', TestScoreListView.as_view()),
    path('<int:pk>/', TestScoreDetailView.as_view())
]