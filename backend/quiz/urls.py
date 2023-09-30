from django.urls import path
from .views import AnswerList, QuestionList

urlpatterns = [
    path('quiz/', QuestionList.as_view(), name='question-list-create'),
    path('quiz/', AnswerList.as_view(), name='answer-list-create'),
]