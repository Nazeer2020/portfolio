const barBtn = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile_nav");



barBtn.addEventListener("click", ()=>{

    mobileNav.classList.toggle("show");
    barBtn.classList.toggle("fa-times");
    
})