from django.urls import path
from .views import UsersListApiView, UserDetialsApiView

urlpatterns = [
    path('api/users', UsersListApiView.as_view()),
    path('api/users/<pk>', UserDetialsApiView.as_view())
]