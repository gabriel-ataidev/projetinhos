const toggleBtn = document.querySelector('#switch');
const headerTitle = document.querySelector('.header-title');
const bgToggle = document.querySelector('.toggle-label');
const bgColor = document.querySelector('.background-color');
const overview = document.querySelector('.overview');
const followers = document.querySelector('.followers');


toggleBtn.addEventListener('click', changeTheme);

function changeTheme() {
    console.log('worked');
    headerTitle.classList.toggle('active');
    bgToggle.classList.toggle('active');
    bgColor.classList.toggle('active');
    overview.classList.toggle('overview-active');
    followers.classList.toggle('followers-active');
}

