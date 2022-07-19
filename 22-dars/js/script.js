/*
let h1 = document.querySelector('h1')

h1.title = "salom"

h1.classList.add('name')
h1.classList.remove('name')

h1.style.color = 'red'

h1.textContent = 'Salom'
h1.innerHTML = `<ul>
<li>asdfsds</li>
<li>asdfsds</li>
<li>asdfsds</li>
<li>asdfsds</li>
</ul>`
*/ 
/*
let h1 = document.createElement('h1')
h1.textContent = 'Heading'

console.log(h1)

document.body.appendChild(h1)

let h2 = document.querySelector('h2')

document.querySelector('div').removeChild(h2)
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

let container = document.querySelector('.container')


books.forEach(elem => {
    container.innerHTML += `
        <ul class="list-group list-group-horizontal m-auto">
            <li class="list-group-item  col-3">${elem.id}</li>
            <li class="list-group-item  col-3">${elem.name}</li>
            <li class="list-group-item  col-3">${elem.author}</li>
            <li class="list-group-item  col-3">${elem.pages}</li>
        </ul>
    `
})
*/ 
/*
let bgBody = (color) => {
    document.body.style.backgroundColor = color
}

let arr = ['yellow', 'red','blue' ,'green']
let index = 0

setInterval( () => {
    if(index == arr.length){
        index = 0
    }
    document.body.style.backgroundColor = arr[index]
    index++
}, 1000)
*/ 

/*
function toogleActive(){
    document.querySelector('.modalNav').classList.toggle('active')
}

let btn = document.querySelector('#btn')

btn.addEventListener('mouseenter', toogleActive)
btn.addEventListener('mouseleave', toogleActive)

btn.addEventListener('dblclick', () => {
    console.log('ikki martta bosdingiz')
})

document.querySelector('.container').addEventListener('mousemove', (event) => {
    //console.log(event)
    //console.log(event.target)

    console.log("X: ", event.clientX)
    console.log("y: ", event.clientY)
})
*/

document.body.addEventListener('mousemove', (event) => {
    console.log("X: ", event.clientX)
    console.log("y: ", event.clientY)

    let round = document.querySelector('.round')
    round.style.left = event.clientX + 'px'
    round.style.top = event.clientY + 'px'
})











