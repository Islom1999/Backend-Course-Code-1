
/*
const arr = [
    'English',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

let set = new Set(arr)
/*
console.log(arr)
console.log(set)

for(i of set){
    console.log(i)
}
console.log('-------') 
for(i of arr){
    console.log(i)
}
*/ 
/*
set.add('Uzbek')
set.add('French')
set.delete('English')

set.clear()
console.log(set)

console.log( set.has('French') )
console.log( set.has('Rus') )
*/ 
/*
let arr = [
    ['Ozbekiston', 'Toshkent'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]

let map = new Map(arr)

map.set('Surxondaryo', "Termiz")

console.log(map)
console.log( map.get('Ozbekiston') )
console.log( map.get('Toshkent') )

console.log( map.has('Toshkent') )
console.log( map.has('Ozbekiston') )
*/ 
/*
let arr = ['Islom', 'Aziz', 'Farrux']
/*
let name1 = arr[0]
let name2 = arr[1]
let name3 = arr[3]
*/ 
/*
let [ name1,name2,name3 ] = arr

console.log(name1)
console.log(name2)
console.log(name3)
*/
/*
let name1 = 5
let name2 = 8
let name3 = 6

let arr = [name1, name2, name3]
/*
arr[0] = name1
arr[1] = name2
arr[2] = name3
*/ 
/*
console.log(arr)
*/ 
/*
let arr1 = [1,2,3,8,2,54]
let arr2 = [54489,649889,654,984]

let arr = [...arr1, ...arr2]
console.log(arr)
*/ 

/*
let obj = {
    name: 'Islom',
    age: 23,
}

let { name, age } = obj

console.log(name)
console.log(age)
*/ 
/*
let name = 'Islom'
let age = 23

let obj = {
    name,
    age
}

console.log(obj)
*/ 
/*
let h1 = document.getElementsByTagName('h1')

//console.log(h1)
//console.log(h1[0])

let name = document.getElementsByClassName('name')

//console.log(name)
//console.log(name[0])

let head = document.getElementById('head')

console.log(head)
*/ 
// teg, class, id, (selector)
/*
let h1 = document.querySelector('#head')

console.log(h1)

let li = document.querySelector('ul#name li')

console.log(li)
*/
/*
let h1 = document.querySelectorAll('h1')

console.log(h1)
console.log(h1[0])
*/ 

let h1 = document.querySelector('h1')

h1.id = 'salom'
h1.title = 'salom'

h1.classList.add('salom')
h1.classList.remove('name')

h1.textContent = 'Islom'
h1.innerHTML += ' <mark>Karimmov</mark>'
h1.style.textAlign = 'center'
h1.style.fontFamily = 'cursive'

function toggleActive(){
    h1.classList.toggle('active')
}

function toggleActiveBody(){
    document.body.classList.toggle('active')
}





