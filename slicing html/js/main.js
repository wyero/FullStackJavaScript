const toggle = document.querySelector(".menu")
const nav = document.querySelector("nav ul")

toggle.addEventListener("click", () => {
    nav.classList.toggle("slide")
})

// search
const searching = document.querySelector(".searching")
const input = document.querySelector(".input")

searching.addEventListener("click", ()=>{
    if(!input.classList.contains("search-open")){
        input.classList.add("search-open")
    }else{
        input.classList.remove('search-open')
    }
})

//slider

let slideIndex = 1;
        showContent(slideIndex)
        function btn_slide(n){
            showContent(slideIndex += n)
        }
        function showContent(n){
            let i
            const content = document.getElementsByClassName('content')
            if(n>content.length){
                slideIndex = 1
            }
            if(n<1){
                slideIndex = content.length
            }
            for(i=0; i<content.length; i++){
                content[i].style.display="none"
            }
            content[slideIndex-1].style.display="block"
        }