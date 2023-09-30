
from django.urls import path
from .views import PlaceListCreateView, PlaceRetrieveUpdateDestroyView

urlpatterns = [
    path('places/', PlaceListCreateView.as_view(), name='place-list-create'),
    path('places/<int:pk>/', PlaceRetrieveUpdateDestroyView.as_view(), name='place-detail'),
]
