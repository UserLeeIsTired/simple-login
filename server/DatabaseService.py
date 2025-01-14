from dotenv import load_dotenv
import os


import psycopg2


load_dotenv()

# Connect to your postgres DB
conn = psycopg2.connect(database = os.getenv('DATABASE'), 
                        user = os.getenv('USER'), 
                        password = os.getenv('PASSWORD'), 
                        host = os.getenv('HOST'), 
                        port = int(os.getenv('PORT'))) # must convert to int from string

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a query
cur.execute(f"SELECT * FROM {os.getenv('USER_TABLE')}")

# Retrieve query results
records = cur.fetchall()
