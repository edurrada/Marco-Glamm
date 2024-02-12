const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const options = document.querySelectorAll(".options-nav")



hamburger.addEventListener("click", () => nav.classList.toggle("active"));

options.forEach(option => {
    option.addEventListener("click", () => nav.classList.toggle("active"));
});