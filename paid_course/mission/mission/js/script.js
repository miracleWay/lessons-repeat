"use sctrict"

let userLogin = prompt('Введіть Ваш логін', '')

if (userLogin === "Admin") {
    let userPass = prompt('Введіть Ваш пароль', '')
    
    if (userPass === "Господар") {
        alert("Ласкаво просимо")
    } else if (userPass === "" || userPass === null) {
        alert("Скасовано")
    } else {
        alert("Неправильний пароль")
    }
} else if (userLogin === "" || userLogin === null) {
    alert("Скасовано")
} else {
    alert("Я вас не знаю")
}



