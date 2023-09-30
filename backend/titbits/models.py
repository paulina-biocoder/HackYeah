from django.db import models
from places.models import Place

class Titbit(models.Model):
    description = models.TextField()
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='titbits')

    def __str__(self):
        return self.description
