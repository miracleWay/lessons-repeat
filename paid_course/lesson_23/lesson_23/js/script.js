"use sctrict"

let userAge
userAge = 17
console.log(userAge)

const myName = "Andrew"
console.log(myName)

let userName = `Andrew`
console.log(typeof userName)
console.log(Boolean(userName))

let data = `Ім'я користувача: ${userName}; Вік: ${userAge}`
console.log(data)
console.log(data.length)

console.log(data[9])

console.log(data.toUpperCase())

console.log(data.includes("стув"))

console.log(data.startsWith("м"))

console.log(data.slice(4, 9))

console.log(data.replace(`Вік`, `Age`))

console.log(data)

data = data.replace(`Вік`, `Age`)

console.log(data)

userAge = -25.2
console.log(Math.abs(userAge))

console.log(Math.random())

console.log(Math.max(1, 5, -6, 10))
console.log(Math.min(1, 5, -6, 10))

let parse = `35.5px`
let result = parseFloat(parse)
console.log(result)

let varOne = +`5`
let varTwo = +`10`

let sum = varOne + varTwo
console.log(sum)