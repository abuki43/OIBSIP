const preLoader = document.getElementById("preloader")

const hamburgerBtn = document.querySelector(".menu")
const navCloseBtn = document.querySelector(".nav-close")
const mobileNav = document.querySelector(".nav-right")
const navOverlay = document.querySelector(".nav-overlay")
const navlists = document.querySelectorAll("nav ul li")
hamburgerBtn.addEventListener("click",()=>{
    mobileNav.classList.add("open")
    navOverlay.classList.add("view")
    console.log("opened")
})

navCloseBtn.addEventListener("click",()=>{
    mobileNav.classList.remove("open")
    navOverlay.classList.remove("view")
})

navlists.forEach(list => list.addEventListener("click",()=>{
    mobileNav.classList.remove("open")
    navOverlay.classList.remove("view")
    scrollToSection()
}) )


window.addEventListener("load",()=>{
    preLoader.style.display = "none"
    
})

function scrollToSection(e) {
     e.preventDefault()
    let targetId = this.getAttribute('href')
    console.log(targetId)
    let targetPosition = document.querySelector(targetId).offsetTop

    window.scrollTo({
        top:targetPosition,
        behavior: "smooth"
    })
}