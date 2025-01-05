"use sctrict"

// const someObject = {
//     name: "Andrew",
//     age: 23,
//     character: "very handsome"
// }
// console.log(someObject);
// console.log(someObject.character);


// someObject.age = 24
// console.log(someObject.age);


// const headerItem = document.querySelector('.header__item')

// headerItem.addEventListener("click", function () {
//     headerItem.style.color = "red"
// })

// or

// headerItem.addEventListener("click", () => {
//     headerItem.style.color = "red"
// })



// const headerItems = document.querySelectorAll(`.header__item`)

// headerItems.forEach(headerItem => {
//     headerItem.addEventListener("click", linkAction)
//     function linkAction(e) {
//         headerItem.style.color = "red"
//         e.preventDefault()
//     }
//     headerItem.removeEventListener("click", linkAction)
// })



// document.addEventListener("click", docAction)

// function docAction (e) {
//     const targetElement = e.target
//     // console.log(targetElement);
    
//     if (targetElement.closest(`.header__item`)) {
//         console.log(`Саме це я і шукав`);
//         e.preventDefault()
//     }
// }


// window.addEventListener("scroll", windowScroll) 

// function windowScroll(e) {
//     console.log(window.scrollY);
    
//     if (window.scrollY > 1000) {
//         console.log(`Hello`);
//     }
// }


// window.addEventListener("scroll", windowScroll)
// window.addEventListener("click", scrollToTop)

// const arrowTop = document.querySelector(`.arrow-top`)

// function scrollToTop () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })
// }   

// function windowScroll() {
//     console.log(window.scrollY);
    
//     if (window.scrollY > 1000) {
//         arrowTop.classList.add('active')
//     } else {
//         arrowTop.classList.remove('active')
//     }
// }



// let options = {
//     root: null,
//     rootMargin: "0px 0px 0px 0px",
//     threshold: 0.3
// }

// let callback = (entries, observer) => {
//     entries.forEach((entry) => {
//         const targetElement = entry.target
//         if (entry.isIntersecting) {
//             arrowTop.classList.add('active')
//         } else {
//             arrowTop.classList.remove('active')
//         }
//     })
// }

// let observer = new IntersectionObserver(callback, options)

// const arrowTop = document.querySelector('.arrow-top')
// const target = document.querySelector('.up-button')
// observer.observe(target)








// const arrowTop = document.querySelector('.arrow-top');
// const targetElement = document.querySelector('.up-button');
// let lastScrollY = window.scrollY;
// let scrollingDown = true;

// // Опції для Intersection Observer
// const observerOptions = {
//     root: null,
//     threshold: 0
// };

// // Функція для обробки подій Intersection Observer
// function observerCallback(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             arrowTop.classList.add('active');  // Робить кнопку видимою
//         } else {
//             if (!scrollingDown) {
//                 arrowTop.classList.remove('active');  // Приховує кнопку, якщо скролимо вгору
//             }
//         }
//     });
// }

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(targetElement);

// // Функція для перевірки напрямку прокрутки
// function handleScrollDirection() {
//     scrollingDown = window.scrollY > lastScrollY;
//     lastScrollY = window.scrollY;
// }

// // Функція для прокрутки до верху сторінки
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }

// // Обробники подій
// window.addEventListener('scroll', handleScrollDirection);
// arrowTop.addEventListener('click', scrollToTop);




// window.addEventListener("DOMContentLoaded", () => {
//     console.log('Hello');
// })

// window.addEventListener("load", () => {
//     console.log('Hello');
// })


// function someFunc () {
//     console.log("Im ready");
// }

// setTimeout(() => {
//     someFunc()
// }, 2000)

// let i = 5
// let timer = setInterval (() => {
//     console.log(i)
//     i === 1 ? clearInterval(timer) : null
//     --i
// }, 1000)


