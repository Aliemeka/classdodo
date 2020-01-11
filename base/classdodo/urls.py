from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('', include('classroom.urls')),
    path('account/', include('account.urls')),
    path('record/', include('account.urls')),
]
