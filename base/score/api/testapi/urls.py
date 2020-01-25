from django.urls import path
from score.views import TestScoreDetailView


urlpatterns = [
    path('<int:pk>/', TestScoreDetailView.as_view())
]