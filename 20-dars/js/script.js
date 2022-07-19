/*
let a = 5
try{
    console.log(a)
}catch(err){
    console.error(err)
}finally{
    console.log('salom')
}
*/ 
/*
let a = 5
try{
    console.log(a)
}catch(err){
    console.error(err)
}
console.log('salom')
*/ 
/*
try{
    console.log(a)
}catch(err){
    console.error(err)
}
console.log('salom')
*/ 
/*
let books = [
    {
        id: 1,
        name: 'Alximik',
        author: 'Paolo Koelyo',
        pages: 153,
    },
    {
        id: 2,
        name: 'Shaytonat',
        author: 'Toxir Malik',
        pages: 864,
    }
]
*/
/*
console.log(books)

let str = JSON.stringify(books, ['name'],2) 

console.log( str )

console.log( JSON.parse(str) )
*/ 

//localStorage.setItem('books', JSON.stringify(books))
/*
let name = 'Islom'


let data = localStorage.getItem('dark')
console.log(data)
*/ 

// localStorage.clear()

// let str = JSON.stringify(books)

// localStorage.setItem('books', str)

// console.log( localStorage.getItem('books') )
/*
let text = localStorage.getItem('books')
//let books = []
try{
    books = JSON.parse(text)
}catch(err){
}

function findBookById (id){
    let find =  books.find(elem => elem.id == id)
    console.log(find)
}
// findBookById(2)

function pushBook(obj){
    books.push(obj)
    console.log(books)
    localStorage.setItem('books', JSON.stringify(books))
}
pushBook({
    id: 3, 
    name: 'sdfdfs', 
    author: 'Toxir ssfw', 
    pages: 88464
})
pushBook({
    id: 4, 
    name: 'sdcdfsdf', 
    author: 'sdfsd ssfw', 
    pages: 65
})*/
/*
let name = 'islom'

localStorage.setItem('name', name)
console.log(localStorage.getItem('name'))
*/

let names = [
    {name:"Islom"},
    {name:"Farrux"},
    {name:"Asilbek"},
    {name:"Aziz"},
]

localStorage.setItem('name', JSON.stringify(names))

let data = JSON.parse(localStorage.getItem('name'))

function findName (name){
    let elem = data.find(elem => elem.name == name)
    console.log(elem)
}
//findName('Islom')

let addName = (obj) => {
    data.push(obj)

    localStorage.setItem('name', JSON.stringify(data))
    data = JSON.parse(localStorage.getItem('name'))
}

// addName({name: 'Aziza'})

let updateName = function(name, obj){
    let index = data.findIndex(elem => elem.name == name)
    data[index] = obj

    localStorage.setItem('name', JSON.stringify(data))
    data = JSON.parse(localStorage.getItem('name'))
}

updateName('Islom', {name: 'Farrux'})



