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



