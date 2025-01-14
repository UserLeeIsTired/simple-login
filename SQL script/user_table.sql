-- Create a sequence
CREATE SEQUENCE user_id_seq START 1;

-- Create a table using the sequence
CREATE TABLE tl_user (
    uid bigint DEFAULT nextval('user_id_seq') PRIMARY KEY,
    username VARCHAR(256) NOT NULL UNIQUE,
    password_hash VARCHAR(256) NOT NULL,
    salt VARCHAR(256) NOT NULL
);

-- Set the sequence owner on the table column
ALTER SEQUENCE user_id_seq OWNED BY tl_user.uid;