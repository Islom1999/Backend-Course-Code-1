/*
function name(varible){
    console.log(varible)
}

let name1 = function(varible){
    console.log(varible)
}

let name2 = (varible) => {
    console.log(varible)
    return varible
}
*/
/*
function name(arr){
    console.log(arr)
}

let arr = []
for(let i=0; i<=10; i++){
    arr.push(parseInt(Math.random()*100))
}

console.log(arr)

function name2(arr, callback){
    let juft = []
    for(elem of arr){
        if(elem % 2 == 0){
            juft.push(elem)
        }
    }
    callback(juft)
}
name2(arr, name)
*/ 

/*
let name = 'Asilbek'   // global

let func = () => {
    let age = 23        // local
    console.log(name)
}

console.log(age)

func()
*/ 

//console.log(a)
//console.log(b + 'salom')

//let b = 5        // 
//var a = 5



/*
function name (){
    console.log('salom')
}

let name1 = () => {
    console.log('salom')
}

var name2 = () => {
    console.log('salom')
}

const name3 = () => {
    console.log('salom')
}
name3()
*/ 
/*
const func = () => {

}

setTimeout( () => {}, 2000 )
setTimeout( function() {}, 2000 )
setTimeout( func, 2000 )
*/ 
/*
setTimeout( () => {
    console.log('salom')
}, 5000 )

setInterval( () => {
    console.log('salom')
}, 3000 )
*/ 
/*
let num = 1
let inter = setInterval( () => {
    console.log(num)
    if(num == 4){
        clearInterval(inter)
    }
    num++
}, 1000 )
*/ 
/*
let arr = ['red', 'green', 'blue']
let index = 0

let inter = setInterval( () => {
    document.body.style.background = arr[index]
    if(index == 2){
        index = 0
    }else{
        index++
    }
}, 100 )
*/ 

//let arr = [321,5456,5165,4564,65,54,654,651]
/*
for(let i = 0; i <= arr.length-1; i++){
    arr[i]
}

for(index in arr){
    arr[index]
}

for(elem of arr){
    elem
}

arr.forEach( (elem, index, arr) => {
    console.log(elem, ' - ', index, ' - ', arr)

} )
*/ 
/*
console.log(arr)

let juft =  arr.map( (elem, index) => {
    if(elem % 2 == 0){
        return elem
    }
} )

console.log(juft) 
*/ 
/*
console.log(arr)

let max = arr.filter( (elem,index,arr) => {
    return elem > 500
} )

console.log(max)
*/ 

//console.log(arr)
/*
let find = arr.find( (elem) => elem >= 4564 )
console.log(find)
*/

/*
let find = arr.findIndex( (elem) => elem == 4564 )
console.log(find)
*/ 
/*
let find = arr.some( (elem) => elem == 464 )
console.log(find)
*/ 
/*
arr.sort()
console.log(arr)

arr.sort( (a,b) => a-b )
console.log(arr)

arr.sort( (a,b) => b-a )
console.log(arr)
*/ 

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
    },
    {
        id: 3,
        name: 'Sariq devni minib',
        author: 'Xudoyberdi To\'xtaboyev',
        pages: 356,
    },
    {
        id: 4,
        name: 'Ufq romani',
        author: 'O\'tkir Xoshimov',
        pages: 482,
    }
]

//func(id)

function findBookById (id){
    let find =  books.find(elem => elem.id == id)
    console.log(find)
}
//findBookById(3)


function findBookByName (name){
    let find =  books.find(elem => elem.name == name)
    console.log(find)
}
//findBookByName('Shaytonat')

function deleteBookById (id){
    let index =  books.findIndex(elem => elem.id == id)
    books.splice(index, 1)
    console.log(books)
}
//deleteBookById(1)
//deleteBookById(3)

function pushBook(obj){
    books.push(obj)
    console.log(books)
}

/*
pushBook({
    id: 10,
    name: 'dscdaa',
    author: 'Toxir Malikadcaa',
    pages: 864,
})
*/

function updateBook(id,obj){
    let index = books.findIndex( (elem) => elem.id == id )
    books[index] = {
        id: id,
        name: obj.name ? obj.name : books[index].name,
        author: obj.author ? obj.author : books[index].author,
        pages: obj.pages ? obj.pages : books[index].pages,
    }
    console.log(books)
}
updateBook(1,{
    id: 15,
    name: 'dscdaa',
})














