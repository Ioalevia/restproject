from rest_framework.serializers import ModelSerializer
from .models import Project, TODO

class TODOModelSerializer(ModelSerializer):
    class Meta:
        model = TODO
        fields = '__all__'

class ProjectModelSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'