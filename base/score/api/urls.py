from django.urls import path
from score.views import ResultListApiView, ResultDetailApiView, TestScoreListApiView

urlpatterns = [
    path('', ResultListApiView.as_view()),
    path('<int:pk>/', ResultDetailApiView.as_view()),
    path('<int:pk>/tests/', TestScoreListApiView.as_view()),
]