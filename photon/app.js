//selectors
const auth = '563492ad6f917000010000019e5b0e5ab68647f5b57e29ffa280326f';
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
let searchValue;
let currentSearch;
const more = document.querySelector('.more');
let page = 1;
let fetchLink;

//event listeners
searchInput.addEventListener('input', updateInput);
form.addEventListener('submit', e => {
    e.preventDefault();
    currentSearch = searchValue;
    searchPhotos(searchValue);
});
// more.addEventListener('click', loadMore);

//functions
function updateInput(e){
    searchValue = e.target.value;
}
async function fetchApi(url){
    const dataFetch = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: auth
        }
    });
    const data = await dataFetch.json();
    return data;
}
function generatePictures(data){
    data.photos.forEach(photo => {
        const galleryImg = document.createElement('div');
        galleryImg.classList.add('gallery-img');
        galleryImg.innerHTML = `
        <div class="gallery-info">
        <p>${photo.photographer}</p>
        <a target="_blank" href=${photo.src.original}>Download</a>
        </div>
        <img src=${photo.src.large}</img>
        `;
        gallery.appendChild(galleryImg);
    });
}
async function curatedPhotos(){
    fetchLink = 'https://api.pexels.com/v1/curated?per_page=16&page=1';
    const data = await fetchApi(fetchLink);
    generatePictures(data);
}
async function searchPhotos(query){
    clear();
    fetchLink = `https://api.pexels.com/v1/search?query=${query}+query&per_page=15&page=1`;
    const data = await fetchApi(fetchLink);
    generatePictures(data);
}
function clear(){
    gallery.innerHTML = '';
    searchInput.value = '';
}
curatedPhotos();