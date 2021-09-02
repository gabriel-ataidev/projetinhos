//selectors
const auth = '563492ad6f917000010000019e5b0e5ab68647f5b57e29ffa280326f';
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
let searchValue;
let currentSearch;
const more = document.querySelector('.more');

//event listeners
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', e => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
});
//functions
function updateInput(e){
    searchValue = e.target.value;
}