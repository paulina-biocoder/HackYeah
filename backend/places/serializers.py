from rest_framework import serializers
from .models import Place, Category
from accounts.models import User

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class PlaceSerializer(serializers.ModelSerializer):
    added_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Place
        fields = ['id', 'name', 'latitude', 'longitude', 'added_by', 'is_visible', 'price', 'category']
