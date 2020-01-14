from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet

router = DefaultRouter()
router.register(r'', SubjectViewSet, basename='subjects')

urlpatterns = router.urls