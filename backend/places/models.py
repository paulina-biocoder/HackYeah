from django.db import models
from accounts.models import User

from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Place(models.Model):
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    name = models.CharField(max_length=255)
    added_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='places_added')
    is_visible = models.BooleanField(default=True)
    project_value = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True, verbose_name="Project Value")
    eu_funding = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True, verbose_name="EU Funding Amount")
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.TextField()
    rating = models.PositiveIntegerField(help_text="Rating out of 5")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']


class PlaceImage(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='images')
    image = models.FileField(upload_to='places/')
    description = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.place.name} - {self.description or 'Image'}"


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
