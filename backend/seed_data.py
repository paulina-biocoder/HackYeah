import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "HackYeah.settings")
django.setup()

from accounts.models import User
from places.models import Category, Place, PlaceImage, Review
from titbits.models import Titbit 

# Add a user
user = User.objects.create_user(
    email='jan.kowalski@example.com',
    password='janpassword',
    name='Jan',
    surname='Kowalski',
    nickname='Janko'
)

user2 = User.objects.create_user(
    email='anna.nowak@example.com',
    password='annapassword',
    name='Anna',
    surname='Nowak',
    nickname='Ania'
)

user3 = User.objects.create_user(
    email='lukasz.zielinski@example.com',
    password='lukaszpassword',
    name='Łukasz',
    surname='Zieliński',
    nickname='Luks'
)


# Add some categories
category1 = Category.objects.create(name='Muzeum')
category2 = Category.objects.create(name='Restauracja')
category3 = Category.objects.create(name='Park')

# Add some places
place1 = Place.objects.create(name='Place 1', latitude=50.067915, longitude=19.941226, added_by=user, category=category1, project_value=1000.50, eu_funding=800.40)
place2 = Place.objects.create(name='Place 2', latitude=50.065227, longitude=19.930059, added_by=user2, category=category2, project_value=1500.00, eu_funding=1000.50)
place3 = Place.objects.create(name='Place 3', latitude=50.063279, longitude=19.946627, added_by=user3, category=category3, project_value=500.00, eu_funding=250.25)
place4 = Place.objects.create(name='Place 4', latitude=50.054863, longitude=19.939466, added_by=user, category=category1, project_value=2000.00, eu_funding=1500.75)
place5 = Place.objects.create(name='Place 5', latitude=50.055876, longitude=19.924839, added_by=user2, category=category2, project_value=3000.00, eu_funding=2250.90)

# Add some titbits for the places
Titbit.objects.create(description="Did you know that Place 1 has a history of over 100 years?", place=place1)
Titbit.objects.create(description="Place 2 serves the best pizza in town!", place=place2)
Titbit.objects.create(description="Many famous personalities have visited Place 3.", place=place3)
Titbit.objects.create(description="Place 4 has been renovated three times since its inception.", place=place4)
Titbit.objects.create(description="Place 5 offers a scenic view of the sunset.", place=place5)

# Add some images for the places
PlaceImage.objects.create(image='places/place1/image.jpg', place=place1)
PlaceImage.objects.create(image='places/place2/image.jpg', place=place2)
PlaceImage.objects.create(image='places/place3/image.jpg', place=place3)
PlaceImage.objects.create(image='places/place4/image.jpg', place=place4)
PlaceImage.objects.create(image='places/place5/image.jpg', place=place5)

# Add some reviews for the places
Review.objects.create(rating=5, comment="Perfect!", user=user, place=place1)
Review.objects.create(rating=4, comment="Pretty good.", user=user2, place=place2)
Review.objects.create(rating=3, comment="Average experience.", user=user3, place=place3)
Review.objects.create(rating=4.5, comment="Almost perfect!", user=user, place=place4)
Review.objects.create(rating=4.7, comment="Great overall.", user=user2, place=place5)

print("Data seeded successfully!")
