

from django.urls import path, include
from .views import ArticleViews, Userviewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('articles', ArticleViews, basename='articles')
router.register('users', Userviewset)


urlpatterns = [
    path('api/', include(router.urls)),

]
