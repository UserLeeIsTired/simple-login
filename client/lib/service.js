export const createUser = async (userEmail, userPassword) => {
    const postData = {
      email: userEmail,
      password: userPassword
    };
    const serverUrl = '';
    try{
        fetch(serverUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
          })
          .then(response => response.text())
          .then(responseText => {
            console.log(responseText); // Log the response from the server
          })
          .catch(error => {
            console.error('Error:', error);
          });

    }catch(error){
        console.log(error)
    }
}