const toggle = document.querySelector(".menu")
const nav = document.querySelector("nav ul")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    nav.classList.toggle("active")
})