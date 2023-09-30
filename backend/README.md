## Setting Up The Project

1. **Create a virtual environment:**
   \```
   python -m venv env
   \```

2. **Activate the virtual environment:**
   \```
   source env/bin/activate
   \```

3. **Install the required packages:**
   \```
   pip install -r requirements.txt
   \```

4. **Start the Django server:**
   \```
   python manage.py runserver
   \```

5. **Make migrations for the apps:**
   \```
   python manage.py makemigrations
   \```

6. **Apply the migrations:**
   \```
   python manage.py migrate
   \```

## In case of issues:

  python cleanup.py

  python manage.py runserver   - and stop server just after run

  python execute_migrations.py

  python seed_data.py
