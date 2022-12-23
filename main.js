

window.addEventListener('scroll' , () => {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if(scrollValue < 90) {
        navbar.classList.remove('navbarBg');
        document.getElementById('asd').style.display = "block";
        document.getElementById('ads').style.display = "none"; 
    }

    else {
        navbar.classList.add('navbarBg');
        document.getElementById('asd').style.display = "none"; 
        document.getElementById('ads').style.display = "block"; 
    }
})

const hamburger = document.querySelector(".hamburger");
const parent_navbar = document.querySelector(".navbar");

hamburger.addEventListener("click" , () => {
    hamburger.classList.toggle("active");
    parent_navbar.classList.toggle("active");
})