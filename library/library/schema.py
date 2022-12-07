
import graphene
from graphene_django import DjangoObjectType
from todo.models import Project, TODO
from authapp.models import User

class TODOType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class UsersType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class Query(graphene.ObjectType):
    all_todos = graphene.List(TODOType)

    def resolve_all_todos(root, info):
        return TODO.objects.all()

schema = graphene.Schema(query=Query)