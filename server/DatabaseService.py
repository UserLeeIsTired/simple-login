from dotenv import load_dotenv
import os


import psycopg2


class DatabaseService:
    def __init__(self):
        # get variables from .env file
        load_dotenv()

        # Connect to your postgres DB
        self.conn = psycopg2.connect(database = os.getenv('DATABASE'), 
                                user = os.getenv('USER'), 
                                password = os.getenv('PASSWORD'), 
                                host = os.getenv('HOST'), 
                                port = int(os.getenv('PORT'))) # Must convert to int from string

        # Open a cursor to perform database operations
        self.cur = self.conn.cursor()

    def test(self):
        # Execute a query
        self.cur.execute(f"SELECT * FROM {os.getenv('USER_TABLE')}")

        # Retrieve query results
        records = self.cur.fetchall()
        print(records)

    def register_user(self, username, password):
        # use a trigger to create a salt, and hash the password + salt
        self.cur.execute("INSERT INTO tl_user (username, password_hash) VALUES (%s, %s)", (username, password))
        self.conn.commit()

d = DatabaseService()
d.register_user('test', 'password')
d.test()
