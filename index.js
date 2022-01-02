"use strict"


const barBtn = document.querySelector(".fa-bars");
const mobileNav = document.querySelector(".mobile_nav");
const project = document.querySelectorAll(".project_subDiv");
const projectPreview = document.querySelectorAll(".project_preview");
const hero = document.querySelector(".hero");
const aboutMeText = document.querySelector(".about-Me-text");
const aboutMeImage = document.querySelector(".about-Me-image");
const projectContainer = document.querySelector(".projects");
const experience = document.querySelector(".experience");
const nav = document.querySelector(".nav");
const inputElement = document.querySelector("input")
const desNavLink = document.querySelectorAll(".des_nav_link");
const mobNavLink = document.querySelectorAll(".moblie_link");
const heading = document.querySelector(".about-Me-heading")
const exp_subDiv = document.querySelector(".exp_subDiv")
let themeMode = localStorage.getItem("themeMode");
const copyright = document.querySelector(".copyright")



// mobile Navigation

barBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("show");
    barBtn.classList.toggle("fa-times");

})





// project preview

project.forEach((element, index) => {
    element.addEventListener("click", () => {
        projectPreview[index].classList.toggle("display")
        project[index].classList.toggle("borderShape")

    })
})


// them selection



if (themeMode === "darkTheme") {
    darkTheme()

} else {
    lightTheme()

}


inputElement.addEventListener("change", () => {

    if (inputElement.checked === true) {
        darkTheme()
    } else {
        lightTheme()
    }


})


function darkTheme() {
    inputElement.checked = true;
    hero.classList.add("darkMode01");
    aboutMeImage.classList.add("darkMode02");
    aboutMeText.classList.add("darkMode02");
    exp_subDiv.classList.add("darkMode02");
    projectContainer.classList.add("darkMode03");
    nav.classList.add("darkMode06")
    mobileNav.classList.add("darkMode06")
    project.forEach(element => {
        element.classList.add("darkMode04")
    });
    projectPreview.forEach(element => {

        element.classList.add("darkMode04")
    })
    experience.classList.add("darkMode05");
    desNavLink.forEach(element => {
        element.classList.add("darkMode07")
        element.style.setProperty("--check-primary", "#fff")
    })
    mobNavLink.forEach(element => {
        element.classList.add("darkMode07");
        element.style.setProperty("--check-primary", "#fff")
    });
    heading.classList.add("darkMode07")
    themeMode = localStorage.setItem("themeMode", "darkTheme")

}


function lightTheme() {

    hero.classList.remove("darkMode01");
    aboutMeImage.classList.remove("darkMode02");
    aboutMeText.classList.remove("darkMode02");
    exp_subDiv.classList.remove("darkMode02");
    projectContainer.classList.remove("darkMode03");
    nav.classList.remove("darkMode06")
    mobileNav.classList.remove("darkMode06")
    project.forEach(element => {
        element.classList.remove("darkMode04")
    });
    projectPreview.forEach(element => {

        element.classList.remove("darkMode04")
    })
    heading.classList.remove("darkMode07")
    desNavLink.forEach(element => {
        element.classList.remove("darkMode07")
        element.style.setProperty("--check-primary", "#000")
    })
    mobNavLink.forEach(element => {
        element.classList.remove("darkMode07")
        element.style.setProperty("--check-primary", "#000")
    })
    experience.classList.remove("darkMode05")


    themeMode = localStorage.setItem("themeMode", "lightTheme")

}

const date = new Date();

copyright.innerText = `© ${date.getFullYear()} Nazeer Haidari`

