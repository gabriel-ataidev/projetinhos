(function () {
  const url = "https://api.github.com/users";
  const client_id = "fceb0a455ca20c2cedd5";
  const client_secret = "12b90fd7d98f214ddb21eba1888848336d7d4a1b";
  const search = document.querySelector("#search");

  async function getUser(user) {
    const profileResponse = await fetch(
      `${url}/${user}?client_id${client_id}&client_secret${client_secret}`
    );
    const profile = profileResponse.json();
    return profile;
  }

  function showProfile(user) {

  }

  search.addEventListener("keyup", (e) => {
    const user = e.target.value;
    if(user.length > 0){
        getUser(user).then((res) => console.log(res));
        getUser(user).then((res) => showProfile(res));
    }
  });
})();
