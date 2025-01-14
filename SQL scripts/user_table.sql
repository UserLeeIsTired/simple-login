-- Drop the table tl_user and the sequence user_id_seq if they exist
DROP TABLE IF EXISTS tl_user CASCADE;

-- Create a sequence
CREATE SEQUENCE user_id_seq START 1;

-- Create the table tl_user using the sequence
CREATE TABLE tl_user (
    uid bigint DEFAULT nextval('user_id_seq') PRIMARY KEY,
    username VARCHAR(256) NOT NULL UNIQUE,
    password_hash VARCHAR(256) NOT NULL,
    salt VARCHAR(256) NOT NULL
);

-- Set the sequence owner of user_id_seq to tl_user.uid
ALTER SEQUENCE user_id_seq OWNED BY tl_user.uid;