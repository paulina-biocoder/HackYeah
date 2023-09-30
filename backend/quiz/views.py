from rest_framework import generics
from .models import Question, Answer
from .serializers import QuestionSerializers, AnswerSerializers

class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializers

class AnswerList(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializers