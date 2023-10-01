import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "HackYeah.settings")
django.setup()

from accounts.models import User
from places.models import Category, Place, PlaceImage, Review
from titbits.models import Titbit 
from quiz.models import Question, Answer


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
category1 = Category.objects.create(name='Edukacja')
category2 = Category.objects.create(name='Transport')
category3 = Category.objects.create(name='Restauracje')

# Add some places
place1 = Place.objects.create(name='Biblioteka Główna', latitude=50.067915, longitude=19.941226, added_by=user, category=category1, project_value=7152066.44, eu_funding=2682193.84)
place2 = Place.objects.create(name='Dworzec "Biblioteka Skawina"', latitude=50.065227, longitude=19.930059, added_by=user2, category=category2, project_value=17295093.79, eu_funding=2818770.36)
place3 = Place.objects.create(name='Park Miejski im. marsz. Józefa Piłsudskiego', latitude=50.063279, longitude=19.946627, added_by=user3, category=category3, project_value=11293213.79, eu_funding=2438130.36)
place4 = Place.objects.create(name='Galeria Sztuki Współczesnej', latitude=50.064863, longitude=19.938476, added_by=user, category=category1, project_value=5135135.50, eu_funding=3135135.00)
place5 = Place.objects.create(name='Restauracja Stare Miasto', latitude=50.066226, longitude=19.929959, added_by=user2, category=category2, project_value=4123123.50, eu_funding=1123123.50)


# Add some titbits for the places
Titbit.objects.create(description="Czy wiesz, że UE ufundowała Wyposażenie nowej siedziby Szpitala Uniwersyteckiego Kraków-Prokocim?", place=place1)
Titbit.objects.create(description="Czy wiesz, że w Krakowie miał miejsce projekt 'Wawel, dziedzictwo dla przyszłości' współfinansowany przez UE? Dziękujemy UE za pomoc w zfinansowaniu renowacji taqk pięknego miejsca.", place=place2)
Titbit.objects.create(description="Czy wiesz, że w powiecie wadowickim miał miejsce projekt 'Innowacyjny Kompleksowy System Zbiórki i Recyklingu Odpadów'? Niech żyje segregacja odpadów!", place=place3)
Titbit.objects.create(description="Czy wiesz, że Rozbudowa ulicy Igołomskiej w Krakowie została w 50%/ ufundowana przez UE?", place=place4)
Titbit.objects.create(description="Czy wiesz, że projekt 'Rozbudowa centrum Badawczo-Rozwojowego Selvita S.A' miał miejsce w latach 2014-2020?", place=place5)
 

# Add some images for the places
PlaceImage.objects.create(image='places/place1/image1.jpg', place=place1)
PlaceImage.objects.create(image='places/place1/image2.jpg', place=place1)
PlaceImage.objects.create(image='places/place1/image3.jpg', place=place1)

PlaceImage.objects.create(image='places/place2/image1.jpg', place=place2)
PlaceImage.objects.create(image='places/place2/image2.jpg', place=place2)
PlaceImage.objects.create(image='places/place2/image3.jpg', place=place2)

PlaceImage.objects.create(image='places/place3/image1.jpg', place=place3)
PlaceImage.objects.create(image='places/place3/image2.jpg', place=place3)
PlaceImage.objects.create(image='places/place3/image3.jpg', place=place3)

PlaceImage.objects.create(image='places/place4/image1.jpg', place=place4)
PlaceImage.objects.create(image='places/place4/image2.jpg', place=place4)
PlaceImage.objects.create(image='places/place4/image3.jpg', place=place4)

PlaceImage.objects.create(image='places/place5/image1.jpg', place=place5)
PlaceImage.objects.create(image='places/place5/image2.jpg', place=place5)
PlaceImage.objects.create(image='places/place5/image3.jpg', place=place5)

 
# Add some reviews for the places
Review.objects.create(rating=5, comment="Niezwykłe miejsce, polecam gorąco!", user=user, place=place1)
Review.objects.create(rating=4, comment="Przyjemny klimat, ładne widoki.", user=user2, place=place2)
Review.objects.create(rating=3, comment="Bardzo ładne.", user=user3, place=place3)
Review.objects.create(rating=4.5, comment="Smaczne jedzenie, miła obsługa. Na pewno tu wrócę!", user=user, place=place4)
Review.objects.create(rating=4.7, comment="Polecam.", user=user2, place=place5)
 
 
question1 = Question.objects.create(place_id=place1.id, question_no=1, question_content="We Wrocławiu w latach 2014-2020 miał miejsce projekt 'Rewitalizacja linii kolejowej nr 292 na odcinku Jelcz Miłoszyce - Wrocław Sołtysowice w celu przywrócenia przewozów pasażerskich we WrOF'. Ile wynosiło dofinansowanie z UE?")
Answer.objects.create(question=question1, answer_text="125 800 096,21 zł", is_correct=False)
Answer.objects.create(question=question1, answer_text="69 694 041,13 zł", is_correct=True)
Answer.objects.create(question=question1, answer_text="125 880 086,23 zł", is_correct=False)
 
question2 = Question.objects.create(place_id=place2.id, question_no=1, question_content="W jakich latach miał miejsce projekt Gazociąg Czeszów-Kiełczów w województwie dolnośląskim?")
Answer.objects.create(question=question2, answer_text="2014-2020", is_correct=True)
Answer.objects.create(question=question2, answer_text="2013-2018", is_correct=False)
Answer.objects.create(question=question2, answer_text="2014-2023", is_correct=False)
 
question3 = Question.objects.create(place_id=place3.id, question_no=1, question_content="Jaka była wartość projektu 'Promowanie strategii niskoemisyjnych na terenie gminy Siechnice- budowa multimodalnych centrów przesiadkowych'?")
Answer.objects.create(question=question3, answer_text="17 360 000,62 zł", is_correct=False)
Answer.objects.create(question=question3, answer_text="9 149 879,96 zł", is_correct=False)
Answer.objects.create(question=question3, answer_text="13 240 414,66 zł", is_correct=True)
 
 
print("Data seeded successfully!")