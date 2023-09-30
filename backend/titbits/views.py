from rest_framework import generics
from .models import Titbit
from .serializers import TitbitSerializer

class TitbitListCreate(generics.ListCreateAPIView):
    queryset = Titbit.objects.all()
    serializer_class = TitbitSerializer

class TitbitRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Titbit.objects.all()
    serializer_class = TitbitSerializer
