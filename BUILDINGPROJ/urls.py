
from django.urls import path, include
from django.contrib import admin
from rest_framework.authtoken.views import obtain_auth_token




urlpatterns = [
   path('admin/',admin.site.urls),
   path('', include('API.urls')),
   path('auth/', obtain_auth_token)

]
