(function () {
  const url = "https://api.github.com/users";
  const client_id = "fceb0a455ca20c2cedd5";
  const client_secret = "12b90fd7d98f214ddb21eba1888848336d7d4a1b";
  const search = document.querySelector("#search");
  const name = document.querySelector("#name");
  const id = document.querySelector("#id");
  const bio = document.querySelector("#bio");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const location = document.querySelector("#location");
  const twitter = document.querySelector("#twitter");
  const website = document.querySelector("#website");
  const company = document.querySelector("#company");
  const profilePicture = document.querySelector("#profile-picture");
  const date = document.querySelector("#date");
  const error = document.querySelector(".error");
  
  async function getUser(user) {
    const profileResponse = await fetch(
      `${url}/${user}?client_id${client_id}&client_secret${client_secret}`
      );
    const profile = profileResponse.json();
    return profile;
  }

  function showProfile(user) {
    if (user.name == undefined) {
      error.style.display = "flex";
      return;
    } else {
      error.style.display = "none";
      profilePicture.setAttribute("src", user.avatar_url);
      name.innerText = user.name;
      const created = user.created_at.substring(0, 10);
      date.innerText = created;
      id.innerText = `@${user.login}`;
      if (user.bio === null) {
        bio.innerText = "This profile has no bio";
      } else {
        bio.innerText = user.bio;
      }
      repos.innerText = user.public_repos;
      followers.innerText = user.followers;
      following.innerText = user.following;
      if (user.location === null) {
        location.innerHTML = "Not available";
      } else {
        location.innerText = user.location;
      }
      if (user.twitter === undefined) {
        twitter.innerHTML = "Not available";
      } else {
        twitter.innerText = user.twitter;
      }
      if (user.twitter === undefined) {
        twitter.innerHTML = "Not available";
      } else {
        twitter.innerText = user.twitter_username;
      }
      if (user.website === undefined) {
        website.innerHTML = "Not available";
      } else {
        website.innerText = user.blog;
      }
      if (user.company === null) {
        company.innerHTML = "Not available";
      } else {
        company.innerText = user.company;
      }
    }
  }

  search.addEventListener("change", (e) => {
    const user = e.target.value;
    if (user.length > 0) {
      getUser(user).then((res) => console.log(res));
      getUser(user).then((res) => showProfile(res));
    }
  });
})();
const body = document.querySelector('body');
const theme = document.querySelector('#theme');
const themeImg = document.querySelector('#theme-img');

theme.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if(body.classList.contains('light-theme')){
    theme.innerHTML = 'DARK <img id="theme-img" src="assets/icon-moon.svg"/>';
  }else{
    theme.innerHTML = 'lIGHT <img id="theme-img" src="assets/icon-sun.svg"/>';
  };
});