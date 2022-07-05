/*
let arr = []
let n = 10 
let s = 0

for(let i = 1; i <= 10; i++){
    arr.push( parseInt( Math.random()*100 ) )
}
console.log(arr)

for(let elem of arr){
    s += elem
}
console.log(s)
console.log(s / arr.length)

let toq = []
let juft = []

for(let index in arr){
    if(arr[index] % 2 == 1){
        toq.push(arr[index])
    }
    if(arr[index] % 2 == 0){
        juft.push(arr[index])
    }
}

console.log(toq)
console.log(juft)

let k = 4
let l = 5
let S = 0

for(let i = k; i<=l; i++){
    S += arr[i]
}
console.log(S)
*/
/*
// 10martta yuradi
for(let i=1; i<=10; i++){

}
// arr nechta element bolsa shuncha yuradi
for(elem of arr){

}
// arr nechta element bolsa shuncha yuradi
for(index in arr){

}
*/ 

/*
let i = 1
while(i <= 10){
    console.log(i)
    i++
}
*/ 

/*
let pass = '123456'
let passInput = prompt('parol kirit')

while(pass !== passInput){
    passInput = prompt('parol kirit')
}
console.log('saytga hush kelibsiz')
*/ 
/*
let num = parseInt(Math.random() * 5)

let numInput = +prompt('kom oylagan sonni top')

while(num !== numInput){
    numInput = +prompt('kom oylagan sonni top')
    console.log('xato')
}
console.log('siz topdiz')
*/ 

/*
let pass = '123456'
let passInput

do{
    passInput = prompt('parol kirit')

}while(passInput !== pass)
*/ 

/*
let dateNow = new Date()  // hozirgi vaqt
let date = new Date('1999-12-14')  // hozirgi vaqt 'YYYY-MM-DD'

console.log(dateNow)

console.log(date)
console.log( date.getFullYear() )
console.log( date.getDay() )
console.log( date.getMonth() )
console.log( dateNow.getMilliseconds() )  // 1s => 1000ms
console.log( dateNow.getHours() )
console.log( dateNow.getMinutes() )

dateNow.setFullYear(2012)
dateNow.setHours(12)
dateNow.setMinutes(12)
dateNow.setSeconds(12)

console.log(dateNow)
*/ 
/*
let dateNow = new Date()  // hozirgi vaqt
let dateBirdth = new Date('1999-12-14')

let mill = dateNow - dateBirdth
let sec = parseInt(mill / 1000)
let min = parseInt(sec / 60)
let time = parseInt(min / 60)
let day = parseInt(time / 24)
let month = parseInt(day / 30)
let year = parseInt(day / 365)

console.log(mill)
console.log(sec)
console.log(min)
console.log(time)
console.log(day)
console.log(month)
console.log(year)
*/ 

console.log('Karimov', 'Islom')
console.log('%s Karimov', 'Islom')
console.log('%d Karimov', 15)

console.log('%c Karimov', 'color: #ff0000; font-size: 35px; text-align: center; border: 2px solid black;')

//console.log(a)

console.error('Salom Bu Xato')
console.warn('Salom Bu Ogohlantirish')


let arr = []
console.time('Regular for loop')
    for(let i = 1; i< 1000; i++){
        arr.push(i)
    }
console.timeEnd('Regular for loop')



