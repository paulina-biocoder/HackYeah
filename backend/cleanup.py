import os
import shutil

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATABASE_PATH = os.path.join(BASE_DIR, 'backend/db.sqlite3')

# Remove SQLite database if it exists
if os.path.exists(DATABASE_PATH):
    os.remove(DATABASE_PATH)

# Remove __pycache__ directories and migrations directories
for root, dirs, files in os.walk(BASE_DIR):

    if 'env' in root:
        continue

    if '__pycache__' in dirs:
        shutil.rmtree(os.path.join(root, '__pycache__'))
    if 'migrations' in dirs and root != os.path.join(BASE_DIR, 'migrations'):
        shutil.rmtree(os.path.join(root, 'migrations'))

