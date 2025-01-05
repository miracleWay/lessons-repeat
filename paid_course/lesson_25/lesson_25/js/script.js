"use sctrict"

// const windowWidth = window.innerWidth
// console.log(windowWidth);

// const windowHeight = window.innerHeight
// console.log(windowHeight);

// console.log(navigator.userAgent);

// if (navigator.userAgent.includes(`Chrome`)) {
// 	console.log(`Chrome`);
// } else {
// 	console.log(`No`);
// }

// console.log(navigator.platform);

// console.log(location.href);

// if (location.href.includes(`5500`)) {
// 	location.href = "https://google.com"
// } else {
// 	console.log(`No`)
// }

// alert(`Hello`)

// let confirmAnswer = confirm(`Answer`)
// // console.log(confirmAnswer);
// if (confirmAnswer) {
// 	console.log(`Yes`);
// } else {
// 	console.log(`No`);
// }

// let promptAnswer = prompt(`How old are you?`)
// if (promptAnswer >= 18) {
// 	console.log(`Let's work`);
// } else if (promptAnswer < 18) {
// 	console.log(`You can't be here`);
// } else if (promptAnswer !== Number) {
// 	console.log(`Type only numbers`);
// } else if (promptAnswer === null) {
// 	console.log(`You haven't type anything`);
// } 

// const htmlElement = document.documentElement
// console.log(htmlElement);

// const headElement = document.head
// console.log(headElement);

// const bodyElement = document.body 
// console.log(bodyElement);


// const bodyElement = document.body 
// const firstChildElement = bodyElement.firstElementChild
// const lastChildElement = bodyElement.lastElementChild
// console.log(firstChildElement);
// console.log(lastChildElement);


// const bodyElement = document.body
// const childCollections = bodyElement.children
// console.log(childCollections);

// for (i = 0; i < childCollections.length; ++i) {
// 	console.log(childCollections[i]);
	
// }

// for (let childCollection of childCollections) {
// 	console.log(childCollection);
// }


// const bodyElement = document.body
// const headElement = document.head
// const previousSibling = bodyElement.previousElementSibling
// const nextSibling = headElement.nextElementSibling
// const parentElement = bodyElement.parentElement

// console.log(previousSibling);
// console.log(nextSibling);
// console.log(parentElement);



// const blockItem = document.querySelector(`.block__item`)
// console.log(blockItem);


// const blockItems = document.querySelectorAll(`.block__item`)
// console.log(blockItems);

// for (let blockItem of blockItems) {
// 	console.log(blockItem);
// }


// const blockList = document.querySelector(`.block__list`)
// const isBlockParent = blockList.closest(`.block`)

// if (isBlockParent) {
// 	console.log(`Yes`);
// } else {
// 	console.log(`No`);
// }


// const blockItems = document.querySelectorAll(`.block__item`)


// blockItems.forEach((blockItem, index) => {
// 	blockItem.innerHTML = `<span>Index: ${index}</span>`
// });

// for (let blockItem of blockItems) {
// 	blockItem.innerHTML = `<span>Hello</span>`
// }



// const blockItems = document.querySelectorAll(`.block__item`)

// for (let blockItem of blockItems) {
// 	blockItem.textContent = `Hello`
// }


// let newDiv = document.createElement(`div`)
// newDiv.innerHTML = `<p class="some-text">Hello</p>`
// console.log(newDiv);

// const boxElement = document.querySelector(`.box`)
// boxElement.append(newDiv)

// const boxElement = document.querySelector(`.box`)

// boxElement.insertAdjacentHTML("afterend",
// 	`<div class="cube">
//                 <p class="cube__text">Lorem ipsum dolor sit amet, <span class="circle">123</span>consectetur 
//                     adipisicing elit. Voluptatibus at cum, rem
//                     facere delectus doloremque autem tempora tempore vel totam!</p>
//             </div>`
// )


// const boxElement = document.querySelector(`.box`)
// let someList = document.querySelector(`.block__list`)

// boxElement.insertAdjacentElement("beforebegin", someList)



// const blockElement = document.querySelector(`.block__list`)
// const blockClone = boxElement.cloneNode(true)
// console.log(boxClone);


// const blockElement = document.querySelector(`.block__list`)
// blockElement.remove()


// const blockElement = document.querySelector(`.block__list`)
// blockElement.className = "something"


// const blockElement = document.querySelector(`.block__list`)
// blockElement.classList.add(`something`)
// blockElement.classList.remove(`block__list`)
// blockElement.classList.toggle(`active`)
// blockElement.classList.contains(`block__list`)

// if (blockElement.classList.contains(`block__list`)) {
//     console.log(`Hello`);
// }



// const blockItems = document.querySelectorAll(`.block__item`)
// let someValue = 10 + 20

// for (blockItems of blockItems) {
//     blockItem.style.fontSize = `${someValue}px`
// }
// or
// blockItems.forEach(blockItem => {
//     blockItem.style.fontSize = `${someValue}px`
// })


// const blockItem = document.querySelector(`.block__item`)
// blockItem.style.color = `red`
// blockItem.style.color = ``


// const blockItem = document.querySelector(`.block__item`)
// blockItem.style.cssText = `
// font-size: 50px;
// `


// const blockItem = document.querySelector(`.block__item`)
// const blockItemStyle = getComputedStyle(blockItem)
// console.log(blockItemStyle);
// const fontSize = parseInt(blockItemStyle.fontSize)
// console.log(fontSize);



// const block = document.querySelector(`.block`)
// let size = parseFloat(block.dataset.size)

// console.log(block.tagName);
// block.hidden = true



// const mainElement = document.documentElement
// const windowClientWidth = mainElement.clientWidth
// const windowClientHeight = mainElement.clientHeight
// console.log(windowClientWidth);
// console.log(windowClientHeight);



// const windowScrollTop = window.scrollY
// console.log(windowScrollTop);


// const scrollBy = window.scrollBy(0, 50)
// console.log(scrollBy);


// window.scrollTo({
//     top: 500,
//     left: 0,
//     behavior: "smooth"
// })


// const blockList = document.querySelector(`.block__list`)
// function scrollToObject () {
//     blockList.scrollIntoView({
//         block: "end",
//         inline: "nearest",
//         behavior: "smooth"
//     })
// }
// scrollToObject ()


// const blockList = document.querySelector(`.block__list`)
// console.log(blockList.offsetParent);
// console.log(blockList.offsetTop);
// console.log(blockList.offsetLeft);



// const blockList = document.querySelector(`.block__list`)
// console.log(blockList.offsetWidth);
// console.log(blockList.offsetHeight);


// const blockList = document.querySelector(`.block__list`)
// console.log(blockList.getBoundingClientRect().top);
// console.log(blockList.getBoundingClientRect().left);


// const element = document.elementFromPoint(50, 600)
// console.log(element);


// Задача №1
// Отримати в константу елемент <body>

// const bodyElement = document.body
// console.log(bodyElement);


// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)


// function addList(numItems = 1) {
//     const ulElement = document.createElement(`ul`)
    
//     for (i = 1; i <= numItems; ++i) {
//         const liElement = document.createElement(`li`)
//         liElement.textContent = (`Пункт: ${i}`)
//         ulElement.appendChild(liElement)
//     }

//     document.body.appendChild(ulElement)
// }
// addList(8)


// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

// const bodyElement = document.body
// bodyElement.classList.add(`loaded`)

// if (bodyElement.classList.contains(`loaded`)) {
//     bodyElement.style.color = `green`
// }

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active, 
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".


// const boxItems = document.querySelectorAll(`.box__item`)

// if (boxItems.length) {
//     boxItems.forEach((item, index) => {
//         item.classList.add(`active`)
//         item.textContent = (`Елемент № ${index+1}`)
//     })
// }


// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки


// const button = document.querySelector(`.footer__btn`)

// function scrollToButton () {
//     button.scrollIntoView({
//         block: "center",
//         inline: "nearest",
//         behavior: "smooth"
//     })
// }
// scrollToButton ()


// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// const boxLink = document.querySelector(`.box__link`)

// boxLink.dataset.someAttribute = "100"
// const valueSomeAttribute = parseFloat(boxLink.getAttribute('data-some-attribute'))

// if (valueSomeAttribute < 200) {
//     boxLink.style.color = "red"
// }


