

    const menuButton = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', ()=>{
        mobileMenu.classList.toggle('hidden');
    });

/* const textArea = document.getElementById('text');
textArea.addEventListener('input', (event) => {

    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, '');
}); */

const currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML=currentYear;

