
from .models import Article
from .serializers import Articleserializer, Userserializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User


class ArticleViews(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = Articleserializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication)

class Userviewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer