from django.urls import path
from .views import UserList, UserRetrieveUpdateDestroyView

urlpatterns = [
    path('accounts/', UserList.as_view(), name='user-list-create'),
    path('accounts/<int:pk>/', UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),
]
