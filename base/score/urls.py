from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import RecordViewSet

router = DefaultRouter()
router.register(r'', RecordViewSet, basename='records')

urlpatterns = router.urls