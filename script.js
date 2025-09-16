

    const menuButton = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('hidden');
    });


const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML=currentYear;

