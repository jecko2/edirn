const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-menu");

hamburger.addEventListener("click", MobileMenu);

function MobileMenu(){
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}

var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/img5.jpg",
    "images/img6.jpg",
    "images/img7r.jpg",
    "images/xy1.jpg",
    "images/xy2.jpg",
    "images/xy3.jpg",
    "images/xy4.jpg",
    "images/xy5.jpg",
    "images/xy6.jpg",
    "images/xy7.jpg",
    "images/xy8.jpg",
    "images/xy9.jpg",
    "images/xy10.jpg",
)
var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout("slider()", 3000)
}


















