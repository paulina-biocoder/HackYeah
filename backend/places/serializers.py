from rest_framework import serializers
from .models import Place, Category, Review, PlaceImage
from accounts.models import User

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    place = serializers.PrimaryKeyRelatedField(queryset=Place.objects.all())

    class Meta:
        model = Review
        fields = ['id', 'user', 'place', 'comment', 'rating', 'created_at']


class PlaceImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = PlaceImage
        fields = ['id', 'image', 'description']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)


class PlaceSerializer(serializers.ModelSerializer):
    added_by = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    images = PlaceImageSerializer(many=True, read_only=True, source='images.all')
    reviews = ReviewSerializer(many=True, read_only=True, source='reviews.all')

    class Meta:
        model = Place
        fields = [
            'id', 'latitude', 'longitude', 'name', 'added_by', 'is_visible',
            'project_value', 'eu_funding', 'category', 'images', 'reviews'
        ]
