"use strict"

// let numOne = ""
// let numTwo = 5
// let result = numOne && numTwo


// console.log(typeof (numOne))
// console.log(typeof (numTwo))

// console.log(result)


// if (3 > 4) {
//     console.log("hello")
// } else if ( 1 > 2) {
//     console.log("wow")
// } else {
//     console.log("bye")
// }

// let someVar = 10 < 5 ? "hello" : "bye"

// console.log(someVar)

// let text = "Hello My name is ANDRII How are you?"

// console.log(`Кількість символів: ${text.length}`)

// for (let i = 0; i < text.length; ++i) {
//     console.log(text[i])
// }

// let array = [10, "hello", "", "again"]

// console.log(array)
// console.log(array[1])
// console.log(typeof array)

// for (let i = 0; i < array.length; ++i) {
//     console.log(array[i])
// }


// let array = [10, "hello", "", "again"]

// array.forEach((i, cell) => {
//     console.log(cell)
//     console.log(i)
// })


// let array = [10, "hello", "", "again"]
// console.log(array)
// array.push("wow")
// console.log(array)

// let array = [10, "hello", "", "again"]
// console.log(array.includes("hello"))


// let array = [10, "hello", "", "again"]

// if (!array.includes("wow")) {
//     array.push("wow")
// }
// console.log(array)


// let array = [10, "hello", "", "again"]
// console.log(Array.isArray(array))

// let array = [10, "hello", "", "again"]
// let string = array.join(' ')
// console.log(typeof string)


// function showMessage() {
//     console.log(`Hello`)
// }
// showMessage()


// function showSum(a = 0, b = 0) {
//     return a + b
// }

// function showMessage (someText = "Значення не задані!") {
//     console.log(someText)
// }

// showMessage(showSum(50, 20))

// let result = showSum(10, 20)
// showMessage(result)



// Привласнення функції змінній

// оголошення змінних
// let someVar;
// let someFuncVar;

// function someFunc() {
//   someVar = 10;
//   // Функціональний вираз (привласнення функції змінній)
//   someFuncVar = function (message) {
//     console.log(message);
//   }
// }

// someFunc()
// someFuncVar("Привіт!")
// console.log(someVar);


// let showMessage = (text = "Hello") => console.log(text)



// let someText = "";
// console.log(someText);

// someText = someText + "<div>"
// console.log(someText);

// someText = someText + `<a href="contacts.html"></a></div>`;
// console.log(someText);

// let someText = ""
// someText += `<div>`
// someText += `<a href="contacts.html"></a>`
// someText += `</div>`
// console.log(someText)



// Задача №1
// Що потрапить в консоль?

// let someVar = 0;
// ++someVar;

// if (someVar) {
// 	console.log(someVar);
// }

// Задача №2
// За допомогою циклу FOR виведіть в консоль 10 рядків:
// Пункт №1
// Пункт №2
// і т.д.


// for (let i = 1; i <= 10; i++) {
//     console.log(`Пункт №${i}`)
// }

// Задача №3
// Що потрапить в консоль ?

// if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
// 	console.log('000');
// }

// Нічого


// Задача №4
// Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
// Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
// Функція не має повертати NaN, Infinite або помилку 


// let div = (a = 0, b = 0) => {
//     return a / b
//     }


// let showMessage = (div) => {
//     if (div) {
//         console.log(`Результат ділення: ${div}`)
//     } 
//     else {
//         console.log(`Помилка в заданих параметрах`)
//     }
// }

// let result = showMessage(div(10, 2))



// function calcDiv (a, b) {
//     let result = a / b
//     if (typeof a !== "number" || typeof b !== "number") {
//         console.log(`Введіть два числа, а не букви`)
//     } else if (b == 0) {
//         console.log(`На нуль ділити не можна!`)
//     }
//     else {
//         console.log(`Результат ділення: ${result}`)
//     }
// }

// calcDiv(10, 2)


// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

// let array = [1, "hello", true, 10, -5, "10"]

// array.forEach(valueArray => {
//     if (valueArray === 10) {
//         console.log(valueArray)
//     }
// })