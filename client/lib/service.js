import { Alert } from "react-native";

export const createUser = async (userEmail, userPassword) => {
    const postData = {
      email: userEmail,
      password: userPassword
    };
    const serverUrl = 'http://10.186.237.63:8000';

    try {
        const response = await fetch(serverUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if (!response.ok){
            throw new Error(await response.text());
        }
    } catch (error) {
        Alert.alert('Error', error.message);
    }
};

