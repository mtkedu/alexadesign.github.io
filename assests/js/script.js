/*============ Menu Show Y Hidden ================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/*==== Menu Show ======*/
/* Validate if constants exsits */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

/*==== Menu Hide ======*/
/* Validate if constants exsits */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}

/*============= Remove Menu Mobile ================== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"); // htmlcollections
const skillsHeader = document.querySelectorAll(".skills__header"); // nodelist

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }
    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

/*==================== Qualification Tabs ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // this gets tabContent which id is equal to data-target
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => tabContent.classList.remove("qualification__active"));
        target.classList.add("qualification__active");

        tabs.forEach((tab) => tab.classList.remove("qualification__active"));
        tab.classList.add("qualification__active");
    });
});
/*================ Services Modal ======================= */
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

function modalFun(i) {
    modalViews[i].classList.toggle("active-modal");
};
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modalFun(i);
    })
});
modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener("click", () => {
        modalFun(i);
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    /* mousewheel: true,
    keyboard: true, */
});

/*=================== Testimonial Swiper ===========================*/
let swiperTestimonial = new Swiper(".testimonial__container", {

    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidsPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.nav__menu a[href*="#${id}"]`);
        if (currentYScroll > sectionTop && currentYScroll <= sectionTop + sectionHeight) {
            currentNavLink.classList.add("active-link");
        } else {
            currentNavLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollTracker);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.scrollY >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scrollUp");
    else scrollUp.classList.remove("show-scrollUp");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "uil-sun";
let theme = localStorage.getItem("alexa-theme");

if (theme) {
    document.body.classList[theme === "dark" ? "add" : "remove"](darkTheme);
    themeButton.classList[theme === "dark" ? "add" : "remove"](sunIcon);
}

themeButton.addEventListener("click", function() {
    this.classList.toggle(sunIcon);
    document.body.classList.toggle(darkTheme);

    theme = document.body.classList.contains(darkTheme) ? "dark" : "light";
    localStorage.setItem("alexa-theme", theme);
});