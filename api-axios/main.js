const url = "http://localhost:5500/api";
const newUser = {
  name: "Oliver",
  avatar: "http://lorempixel.com.br/500/400/",
  city: "São José",
};
const userUpdated = {
  name: "Sandrão",
  avatar: "http://lorempixel.com.br/500/400/",
  city: "Itaquera",
};

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResults.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}
getUser();

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
addNewUser();

function updateUser() {
  axios
    .put(`${url}/3`, userUpdated)
    .then((response) => alert(JSON.stringify(response.data)))
    .catch((error) => console.log(error));
}
updateUser();

function deleteUser() {
    axios.delete(`${url}/4`)
    .then((response) => alert(JSON.stringify(response.data)))
    .catch((error) => console.log(error))
}
deleteUser();

function getOneUser() {
    axios.get(`${url}/8`)
    .then(response => {
        const data = response.data;
        renderResults.textContent = JSON.stringify(data);
    })
    .catch(error => console.log(error))
}
getOneUser();