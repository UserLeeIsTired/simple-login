from dotenv import load_dotenv
import os


import psycopg2

import functools
print = functools.partial(print, flush=True)


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
        try:
            # use a trigger to create a salt, and hash the password + salt
            
            self.cur.execute("INSERT INTO tl_user (username, password_hash) VALUES (%s, %s)", (username, password))
            self.conn.commit()

            return True
        except Exception as e:
            # Log the error or handle it appropriately

            print(f"An error occurred while registering user: {e}")

            # Rollback the transaction if needed
            self.conn.rollback()

            return False


