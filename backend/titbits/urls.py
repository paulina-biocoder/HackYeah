from django.urls import path
from .views import TitbitListCreate, TitbitRetrieveUpdateDestroy

urlpatterns = [
    path('titbits/', TitbitListCreate.as_view(), name='titbit-list-create'),
    path('titbits/<int:pk>/', TitbitRetrieveUpdateDestroy.as_view(), name='titbit-retrieve-update-destroy'),
]
