python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
python manage.py makemigrations places titbits accounts
python manage.py migrate
python seed_data.py



In case of issues :
remove db.sqlite
remove all __pycache__ and migrations dirs in all apps
python manage.py makemigrations places titbits accounts
python manage.py migrate
python seed_data.py