from django.urls import path
from .views import UserList

urlpatterns = [
    path('accounts/', UserList.as_view(), name='user-list-create'),
]
