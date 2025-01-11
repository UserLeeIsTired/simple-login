from dotenv import load_dotenv
import os
import sys

import mariadb


class DatabaseConnection:
    def __init__(self):
        try:
            self.conn = mariadb.connect(
                user=os.getenv("USER"),
                password=os.getenv("PASSWORD"),
                host=os.getenv("HOST"),
                port=int(os.getenv("PORT")),
                database=os.getenv("DATABASE")
            )
        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            sys.exit(1)

    def get_cursor(self):
        cur = self.conn.cursor()
        cur.execute("SELECT * FROM users")
        print(list(cur))

    def close_connection(self):
        self.conn.close()

def main():
    load_dotenv()
    d = DatabaseConnection()
    d.get_cursor()
    d.close_connection()

main()