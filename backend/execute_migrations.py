import os
import subprocess


# Create and apply migrations
APPS = ['accounts', 'places', 'titbits', 'quiz']

for app in APPS:
    # Create new migrations for each app
    subprocess.run(['python', 'manage.py', 'makemigrations', app])

# Apply migrations for core and third-party apps
subprocess.run(['python', 'manage.py', 'migrate'])

# Apply migrations for your custom apps
for app in APPS:
    subprocess.run(['python', 'manage.py', 'migrate', app])

print("Migration sequence completed!")

