-- Create the trigger to set the salt and password_hash columns on insert
CREATE OR REPLACE FUNCTION insert_tl_user_trigger() RETURNS TRIGGER AS $$
BEGIN
    -- Generate a random key for the salt column
    NEW.salt = md5(random()::text);

    -- Concatenate the password with the salt and hash the combined value
    NEW.password_hash = md5(NEW.password || NEW.salt);

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger on the tl_user table
CREATE OR REPLACE TRIGGER insert_tl_user
BEFORE INSERT ON tl_user
FOR EACH ROW
EXECUTE FUNCTION insert_tl_user_trigger();