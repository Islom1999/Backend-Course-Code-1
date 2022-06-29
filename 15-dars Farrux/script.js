
// 123 =>  122 333 121
/*
let num = 123

let a = num % 10   // 3 
let b = parseInt((num % 100)/10)  // 2
let c = parseInt(num/100)  // 1

if(a!==b && a!==c && b!==c){
    console.log('sonlar har hil')
}else{
    console.log('sonlar har hil emas')
}
*/ 

// switch
/*
let a = +prompt('kun kirit')

switch(a){
    case 1: console.log('dushanba'); break;
    case 2: console.log('seshanba'); break;
    case 3: console.log('chorshanba'); break;
    case 4: console.log('payshanba'); break;
    case 5: console.log('juma'); break;
    case 6: console.log('shanba'); break;
    case 7: console.log('yakshanba'); break;
}*/ 

// a,b = son ; c = amal =+
/*
let a = +prompt('1-sonni kirit')
let b = +prompt('2-sonni kirit')
let c = prompt('amalni kirit')

switch(c){
    case '+': console.log(a+b); break;
    case '-': console.log(a-b); break;
    case '/': console.log(a/b); break;
    case '*': console.log(a*b); break;
    case '**': console.log(a**b); break;
    case '%': console.log(a%b); break;
    default: console.log('amal xato') 
}
*/ 
/*
let a = +prompt('1-sonni kirit')
let b = +prompt('2-sonni kirit')
let c = prompt('amalni kirit')

if(c=='+'){
    console.log(a+b);
}else if(c=='-'){
    console.log(a-b);
}else if(c=='-'){
    console.log(a-b);
}else if(c=='*'){
    console.log(a*b);
}else if(c=='/'){
    console.log(a/b);
}
*/ 

/*
let arr = ['Islom', 23, false, [], {}]
*/ 
/*
        //     0         1        2
let names = ['Islom', 'Sardor', "Farrux"]
names[3] = 'Alimardon'
names[0] = 'Azizbek'

console.log(names)
console.log(names[0])
console.log(names[2])
console.log(names[3])
*/

/*
let names = ['Islom', 'Sardor', "Farrux"]

names[5] = 15

console.log(names)
console.log(names.length)
*/ 

/*
let names = ['Islom', 'Sardor', , , "Farrux"]

console.log(names)
console.log(names.length)
*/ 
/*
let names = 'Islom Farrux Alimardon'

console.log(names.split(' '))
*/ 
/*
let arr1 = [1,2,3]
let arr2 = [4,5,6]

let arr3 = arr1.concat(arr2)

console.log(arr3) */ 

/*
let a = 5
let b = 6
b=8
console.log(a)
console.log(b) */
/*
let arr1 = [1,2,3]
let arr2 = arr1

arr2[3] = 4

console.log(arr1) // 1234
console.log(arr2) // 1234
*/

/*
// [1,2,3] + []
let arr1 = [1,2,3]
let arr2 = arr1.concat()

arr2[3] = 4

console.log(arr1) // 1234
console.log(arr2) // 1234
*/ 
/*
let a = 0
let names = ['Islom', 'Sardor', "Farrux"]

console.log(names.indexOf('farrux'))
console.log(names.includes('Farrux'))

console.log( Array.isArray(names) )
console.log( Array.isArray(a) )

console.log( names.toString() )
console.log( names.join(' - ') )

console.log( names.slice(1,2) )  //inxdexlar: bosh, tugash

*/
/*
let names = ['Islom', 'Sardor', "Farrux"]

names.splice(2, 1)  //inxdexlar: bosh, nechtaligi
names.push('Aziz')
names.pop()
names.shift()
names.unshift('Asilbek')

console.log(names)
*/ 

/*
let arr = [1,2,3, 25,4,5,6]

console.log(arr)
arr.reverse()
console.log(arr)
arr.sort()
console.log(arr)



let webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()

console.log(webTechs)
*/ 
/*
let user = [
    ['Islom', 23, 'islom6962'],
    ['Farrux', 14, 'Farrux'],
    ['Alisbek', 17, 'Alisbek62'],
]

console.log(user)
console.log(user[0])
console.log(user[0][0])
console.log(user[0][2])
*/














