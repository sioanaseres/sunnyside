"use strict"
const toggleButton= document.querySelector(".ToggleButton");
const navMobile = document.querySelector(".NavigationMobile");
const pageTitle = document.querySelector(".PageTitle");

toggleButton.addEventListener("click", function(){
    navMobile.classList.toggle("Active");
    pageTitle.classList.toggle("Inactive");
})

