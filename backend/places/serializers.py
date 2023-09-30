from rest_framework import serializers
from .models import Place, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PlaceSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Place
        fields = '__all__'
