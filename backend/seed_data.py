import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "HackYeah.settings")
django.setup()

from accounts.models import User
from places.models import Category, Place
from titbits.models import Titbit  # Assuming this is the model's import path

# Add a user
user = User.objects.create_user(
    email='testuser23@example.com',
    password='testpassword',
    name='Test',
    surname='User',
    nickname='TestNick'
)

# Add some more users for diversity
user2 = User.objects.create_user(
    email='john@example.com',
    password='johnpassword',
    name='John',
    surname='Doe',
    nickname='Johnny'
)

user3 = User.objects.create_user(
    email='jane@example.com',
    password='janepassword',
    name='Jane',
    surname='Smith',
    nickname='Janey'
)

# Add some categories
category1 = Category.objects.create(name='Museum')
category2 = Category.objects.create(name='Restaurant')
category3 = Category.objects.create(name='Park')

# Add some places with updated latitude and longitude
place1 = Place.objects.create(name='Place 1', latitude=50.067915, longitude=19.941226, added_by=user, category=category1, price=10.50)
place2 = Place.objects.create(name='Place 2', latitude=50.065227, longitude=19.930059, added_by=user2, category=category2, price=15.00)
place3 = Place.objects.create(name='Place 3', latitude=50.063279, longitude=19.946627, added_by=user3, category=category3, price=0.00)
place4 = Place.objects.create(name='Place 4', latitude=50.054863, longitude=19.939466, added_by=user, category=category1, price=20.00)
place5 = Place.objects.create(name='Place 5', latitude=50.055876, longitude=19.924839, added_by=user2, category=category2, price=30.00)

# Add some titbits for the places
Titbit.objects.create(description="Did you know that Place 1 has a history of over 100 years?", place=place1)
Titbit.objects.create(description="Place 2 serves the best pizza in town!", place=place2)
Titbit.objects.create(description="Many famous personalities have visited Place 3.", place=place3)
Titbit.objects.create(description="Place 4 has been renovated three times since its inception.", place=place4)
Titbit.objects.create(description="Place 5 offers a scenic view of the sunset.", place=place5)

print("Data seeded successfully!")
