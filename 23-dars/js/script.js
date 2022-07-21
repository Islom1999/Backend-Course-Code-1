/*
const btn = document.querySelector('button')

btn.addEventListener('mouseout', (event) => {
    console.log(event.target)
})

const input = document.querySelector('input')

input.addEventListener('input', (event) => {
    console.log(event.target.value)
})


document.body.addEventListener('keypress', (event) => {
    console.log(event.key)
    console.log(event.keyCode)
})

//keypress 
*/ 
/*
class Person {
    constructor(firstName, lastName, age) {
        this.name = firstName
        this.familiya = lastName
        this.yosh = age
    }
}

let Islom = new Person('Islom', 'Karimov', 23)
let Farrux = new Person('Farrux', 'Abdujabborov', 14, 'asdas')

console.log(Islom)
console.log(Farrux)

/*
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    get fullName() {
        return this.firstName
    }
    set setAge(age){
        this.age = age
    }
}

let Islom = new Person('Islom', 'Karimov', 23)

console.log(Islom)

Islom.setAge = 50

console.log(Islom)
*/

const div = document.querySelector('div')

document.body.addEventListener('keypress', (e) => {

    let top = window.getComputedStyle(document.querySelector('div')).top
    let left = window.getComputedStyle(document.querySelector('div')).left

    //w
    if(e.keyCode == 119){
        div.style.top = parseFloat(top) - 50 + 'px'
    }
    //a
    if(e.keyCode == 97){
        div.style.left = parseFloat(left) - 50 + 'px'
    }
    //s
    if(e.keyCode == 115){
        div.style.top =  parseFloat(top) + 50 + 'px'
    }
    //d
    if(e.keyCode == 100){
        div.style.left = parseFloat(left) + 50 + 'px'
    }
})


// w - 119
// a - 97
// s - 115
// d - 100

