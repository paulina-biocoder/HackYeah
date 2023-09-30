from django.db import models

class Question(models.Model):
    place_id = models.IntegerField() 
    question_no = models.IntegerField()
    question_content = models.TextField()

    def __str__(self):
        return self.question_content

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answers')
    answer_text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer_text
   
