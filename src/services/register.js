export const loginWithUserPassword = (email, password) => {
  return fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

export const signUpWithEmailAndPassword = (name, email, password, role) => {
  // var myHeaders = new Headers();
  const myInit = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "MagicBurguer",
    }),
  };

  return fetch("https://lab-api-bq.herokuapp.com/users", myInit)
    .then(function (response) {
      return response.json();
    })
    .then((jsonFile) => {
      if (jsonFile.code === "403") {
        throw new Error();
      }
      // console.log(jsonFile);
      return jsonFile;
    })
    .catch((error) => {
      return error;
    });
};
