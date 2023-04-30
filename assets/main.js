const burguerButton = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.menu')
const hero = document.querySelector('.hero')
let menuOn = 0;

burguerButton.addEventListener("click", () => {
    
    if(menuOn === 0) {
        burguerButton.src = "assets/images/icon-menu-close.svg";
        mobileMenu.style.display = "block";
        
        menuOn = 1;
    }
    else{ 
        burguerButton.src = "assets/images/icon-menu.svg";
        mobileMenu.style.display = "none";
        menuOn = 0;
    }
})