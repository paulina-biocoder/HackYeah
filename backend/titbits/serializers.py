from rest_framework import serializers
from .models import Titbit

class TitbitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Titbit
        fields = ['id', 'description', 'place']
