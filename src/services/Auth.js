export const loginWithEmailAndPassword = (email, password) => {
    return fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify ({
        "email": email,
        "password": password
    })
  });
};

export default loginWithEmailAndPassword;
