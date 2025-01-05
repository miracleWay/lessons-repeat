"use sctrict"


document.addEventListener("click", menuOpen)

function menuOpen (e) {
    const targetElement = e.target

    if (targetElement.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open")
    } else if (!targetElement.closest(".menu__body")) {
        document.documentElement.classList.remove("menu-open")
    } else if (targetElement.closest(".menu__link")) {
        if (document.documentElement.classList.contains("menu-open")) {
            document.documentElement.classList.remove("menu-open")
        }
    }

    const link = targetElement.closest('.menu__link')
    const goto = link.dataset.goto

    const goToElement = document.querySelector(goto)
    if (goToElement) {
        goToElement.scrollIntoView({
            behavior: "smooth"
        })
    }
} 