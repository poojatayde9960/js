
const arr = []

const fizzbuzz = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("fizzBuzz")
        } else if (i % 3 === 0) {
            arr.push("fizz")
        } else if (i % 5 === 0) {
            arr.push("fizz")
        } else {
            arr.push(i)
        }

    }
}
fizzbuzz(20)
console.log(arr);

// Problem:
//  Write a function that checks whether a number is prime. The function will return an array of prime numbers from 1 to num.


const array = []
const evenOdd = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            array.push("even")
        } else {
            array.push("odd")
        }

    }
}
evenOdd(5)
console.log(array);


let sum = 0
const sumMultiple = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sum += i
        }
    }
}
sumMultiple(20)
console.log(sum);
// ------------------------

// const message = "Lorem ipsum dolor sit amet consectetur, 00adipisicing elit. Nihil commodi excepturi veniam quas error, sunt, consequatur dolorem assumenda eum laboriosam magni temporibus dolor alias maxime sequi sit sint at. Quibusdam temporibus dolor alias maxime."

// console.log(message.length)

// const x = message.split(" ")
// console.log(x.length)
// console.log(message.toLowerCase())
// console.log(message.toUpperCase())

const message = "Lorem ipsum dolor sit amet consectetur, 00adipisicing elit. Nihil commodi excepturi veniam quas error, sunt"

const x = message.split(" ")
// console.log(x.length);
console.log(message.toLocaleLowerCase());






















