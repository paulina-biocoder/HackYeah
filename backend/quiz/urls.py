from django.urls import path
from .views import AnswerList, QuestionList, QuestionRetrieveUpdateDestroyView, AnswerRetrieveUpdateDestroyView

urlpatterns = [
    path('quiz/questions/', QuestionList.as_view(), name='question-list-create'),
    path('quiz/answers/', AnswerList.as_view(), name='answer-list-create'),
    path('quiz/questions/<int:pk>/', QuestionRetrieveUpdateDestroyView.as_view(), name='question-detail'),
    path('quiz/answers/<int:pk>/', AnswerRetrieveUpdateDestroyView.as_view(), name='answer-detail'),
]