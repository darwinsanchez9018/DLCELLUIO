/* ==== MODO CLARO & OSCURO ==== */
const ncolorColor = document.getElementById("ncolor");
const ncolorIcon = document.getElementById("ncolor-icon");

ncolorColor.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    if(ncolorIcon.classList.contains("ri-moon-fill")){
        ncolorIcon.classList.replace("ri-moon-fill", "ri-sun-fill")
    }else{
        ncolorIcon.classList.replace("ri-sun-fill", "ri-moon-fill")
    }
})




/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*====mostrar clase show-menu====*/
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}
/*====ocutar clase show-menu====*/
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}


/*=============== QUITAR MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction () {
    const navMenu = document.getElementById("nav-menu")
    //Cuando le damos click a cada nav__link, removeremos el show-menu
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


/*========== Cambiar el Background del HEADER =========*/
function scrollHeader() {
    const header = document.getElementById("header")
    //Cuando el scroll es más grande que 50 viewport height, añadir la clase scroll-header para el header tag
    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)


/*==================== Mostrar el SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    //Cuando es scroll es mayor que (200 viewport height), añade la clase show-scroll a un tag con la clase scroll-top
    if(this.scrollY >= 200) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 400,
    //reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {delay: 900, origin: "top"})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content`, {origin: "top", interval:100})
sr.reveal(`.specs__data, .discount__animate, .case__img3, .case__img5`, {origin: "left", interval:100})
sr.reveal(`.specs__img, .discount__img, .case__img2, .case__img4, .case__img6`, {origin: "right"})
sr.reveal(`.case__img`, {origin: "top"})
sr.reveal(`.case__data`)