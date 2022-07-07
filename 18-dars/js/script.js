/*
let arr = [
    23,
    'Islom',
    false
]
console.log(arr[0])
*/ 
/*
let person = {
    age: 23,
    name: 'Islom',
    isStudent: false,
    lang: ['eng', 'uz', 'rus'],
    tell: {
        phone: '656548974',
        mobile: '4654895489'
    }
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.isStudent)
console.log(person.lang)
console.log(person.tell)
console.log(person.tell.mobile)
console.log(person.tell.phone)
*/ 
/*
let person = {
    age: 23,
    name: 'Islom',
    isStudent: false,
}
let tell = {
    tell: {
        phone: '656548974',
        mobile: '4654895489'
    }
}

console.log( Object.assign(person,tell) )
*/ 
/*
let a = 5
let b = a
b=6

let arr1 = ['sdf']
let arr2 = [].concat(arr1)

arr2.push(1)

let person1 = {
    age: 23,
    name: 'Islom',
    isStudent: false,
}

let person2 = Object.assign({}, person1)

person2.age = 45

console.log(person1, person2)
*/ 

/*
let person1 = {
    age: 23,
    name: 'Islom',
    isStudent: false,
}
console.log( Object.keys(person1) )
console.log( Object.values(person1) )
console.log( Object.entries(person1) )

let arrObg = Object.entries(person1)

for(elem of arrObg){
    if(elem[0] == 'age'){
        console.log(elem)
    }
}
*/ 
/*
let person1 = {
    age: 23,
    name: 'Islom',
    isStudent: false,
}

console.log( person1.hasOwnProperty('tell') )
console.log( person1.hasOwnProperty('name') )
*/ 
/*
let i = 0
setInterval( () => {
    console.log(i)
    i++
}, 2000 )
*/ 


/*
function func(variable){
    let max = variable[0]
    for(elem of variable){
        if(max < elem){
            max = elem
        }
    }
    
    console.log(variable)
    console.log(max)
}

let arr = [12,6874,32,487,354,987,321,56480,4]
let arr1 = [12,6874,32,487,354,987,321,4]

func(arr)
func(arr1)
*/ 
/*
function funcName(){
    console.log('Salom')
}

//funcName()

function funcName1(num){
    console.log(num)
}

//funcName1(500)
//funcName1(1000)
//funcName1('Islom')

function funcName2(a,b){
    console.log(a+b)
}
//funcName2(500, 600)

function funcName3(a,b){
    return a+b
}

let summ = funcName3(500, 600)

console.log(summ)
console.log( funcName3(500, 800) )
*/ 

/*
// dekloration
function name (){

}

// expression
let func = function(num){
    console.log(num)
}
// arrow
let func1 = (num) => {
    console.log(num)
}

func(5)
func1(6)
*/ 
/*
function karra(num){
    for( let i = 1; i<=10; i++){
        console.log( num + ' X ' + i + ' = '+ i*num )
    }
    console.log('')
}
karra(2)
karra(3)
karra(4)
karra(5)
karra(6)
karra(7)
*/ 

// func(a,b, c)
/*
let func = (a,b,c) => {
    switch(c){
        case '+': console.log(a + b); break;
        case '-': console.log(a - b); break;
        case '*': console.log(a * b); break;
        case '/': console.log(a / b); break;
    }
}
func(4,6,'+')
func(4,6,'-')
func(4,6,'*')
func(4,6,'/')
*/ 
/*
let h1 = document.querySelector('h1')
let num = 0

h1.innerHTML = num

function inc(){
    num++
    h1.innerHTML = num
}
function dec(){
    num--
    h1.innerHTML = num
}
*/











