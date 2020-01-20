from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet, TestViewSet

router = DefaultRouter()
router.register(r'', SubjectViewSet, basename='subjects') 
router.register(r'tests/', TestViewSet, basename='tests') 

urlpatterns = router.urls