const navLink1 = document.querySelector('#home-link');
const navLink2 = document.querySelector('#new-link');
const navLink3 = document.querySelector('#popular-link');
const navLink4 = document.querySelector('#trending-link');
const navLink5 = document.querySelector('#category-link');

const nav = document.querySelector('#nav-toggle');

navLink1.addEventListener("click", removeNav);
navLink2.addEventListener("click", removeNav);
navLink3.addEventListener("click", removeNav);
navLink4.addEventListener("click", removeNav);
navLink5.addEventListener("click", removeNav);

function removeNav(){
    nav.checked = false;
}