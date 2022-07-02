const toggle = document.querySelector(".menu")
const nav = document.querySelector("nav ul")

toggle.addEventListener("click", () => {
    nav.classList.toggle("slide")
})