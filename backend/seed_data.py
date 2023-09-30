import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "HackYeah.settings")
django.setup()

from accounts.models import User
from places.models import Category, Place

# Add a user
user = User.objects.create_user(
    email='testuser23@example.com',
    password='testpassword',
    name='Test',
    surname='User',
    nickname='TestNick'
)

# Add some categories
category1 = Category.objects.create(name='Museum')
category2 = Category.objects.create(name='Restaurant')
category3 = Category.objects.create(name='Park')

# Add some places
Place.objects.create(name='National Museum', latitude=10.99, longitude=77.01, added_by=user, category=category1, price=10.50)
Place.objects.create(name='Pizza Place', latitude=12.99, longitude=77.01, added_by=user, category=category2, price=15.00)
Place.objects.create(name='Central Park', latitude=12.3486, longitude=78.9151, added_by=user, category=category3, price=0.00)

print("Data seeded successfully!")
