from django.shortcuts import render

# Create your views here.

from rest_framework import mixins, viewsets
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserNewVersionModelSerializer

class UserModelViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_serializer_class(self):
        if self.request.version == '2.0':
            return UserNewVersionModelSerializer
        return UserModelSerializer
