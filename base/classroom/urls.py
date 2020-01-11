from django.urls import path
from .views import SubjectListApiView, SubjectDetailApiView

urlpatterns = [
    path('', SubjectListApiView.as_view()),
    path('<pk>/', SubjectDetailApiView.as_view()),
]