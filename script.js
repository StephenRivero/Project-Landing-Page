//Header Section Parallax Effect
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
   let value = window.scrollY;
   parallax.style.backgroundPositionY = value * .5 + "px";
    // let offset = window.pageYOffset;
    // parallax.style.backgroundPositionY = offset * .7 + "px";
})

// Hamburger Section
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const branding = document.querySelector(".branding");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    branding.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    branding.classList.remove("active");
}))


// Navbar Scroll settings
let   lastScrollTop = 0;
        navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top="-80px";
    } else {
        navbar.style.top="0";
        navbar.classList.toggle("sticky", window.scrollY > 0);
        hamburger.classList.toggle("sticky", window.scrollY > 0);
    }
    lastScrollTop = scrollTop;
})


// Navbar Scroll Sticky
// const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", function(){
//     navbar.classList.toggle("sticky", window.scrollY > 0);
//     hamburger.classList.toggle("sticky", window.scrollY > 0);
// })

