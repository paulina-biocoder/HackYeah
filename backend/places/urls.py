
from django.urls import path
from . import views

urlpatterns = [
    path('places/', views.PlaceListCreateView.as_view(), name='place-list-create'),
    path('places/<int:pk>/', views.PlaceRetrieveUpdateDestroyView.as_view(), name='place-detail'),
    path('categories/', views.CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', views.CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail')
]
