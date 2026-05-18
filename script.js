// This is code for RESPONSIVE MENU
window.addEventListener('resize', e =>{
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(e.target.innerWidth > 1000){
        menu.classList.remove('active');
        btn.innerText = 'MENU';
    }
});

const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU'){
        menu.classList.add('active');
        btn.innerText = 'CLOSE';
    }else{
        menu.classList.remove('active');
        btn.innerText = 'MENU';
    }   
}

// This is code for SLIDER
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');
let imageNum = 0;

const moveRight = () => {
    displayNone(pictures);
    imageNum++;
    
    if(imageNum === pictures.length) imageNum = 0;
  
    pictures[imageNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone(pictures);
    imageNum--;
    
    if(imageNum < 0) imageNum = pictures.length - 1;
  
    pictures[imageNum].style.display = 'block';
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

// Function will hide all images
const displayNone = elements => elements.forEach(img => img.style.display = 'none');

// This is code for FILTER CATEGORIES
const portfolioSort = button => {
    let category = button.getAttribute('data-category');
    let portfolioItems = document.querySelectorAll('.portfolio-single-item');

    portfolioItems.forEach(item => item.style.display = 'none');

    if(category === 'sve') portfolioItems.forEach(item => item.style.display = 'block');

    portfolioItems.forEach(item => {
       if(item.getAttribute('data-category').includes(category)){
            item.style.display = 'block';
        }
    });
}

let portfolioButtons = document.querySelectorAll('.portfolio-categories button');
portfolioButtons.forEach(portfolioBtn => {
    portfolioBtn.addEventListener('click', () => portfolioSort(portfolioBtn));
})

// This is code for OPENING MODAL
let modalWindow = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');

const openModal = () => {
    modalWindow.style.display = 'block';
    overlay.style.display = 'block';
}

const closeModal = () => {
    modalWindow.style.display = 'none';
    overlay.style.display = 'none';
}