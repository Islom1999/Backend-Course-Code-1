
/*
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
*/ 
/*
for(let i = 1; i<=100; i++){
    console.log(i)
}
*/ 

/*
for(let i = 1; i<=100; i+=2){
    console.log(i)
}
*/ 
/*
for(let i = 0; i<=100; i+=2){
    console.log(i)
}
*/ 
/*
for(let i = 0; i<=100; i+=2){
    console.log(i)
    if( i==50 ){
        break  // siklni toxtatadi
    }
}
*/ 

/*
for(let i = 0; i<=100; i+=1){
    if(i % 3 == 0){
        continue     /// siklni bitta qadamini tashlab otadi
    }
    if(i % 2 == 1){
        console.log(i)
    } 
}
*/ 

//  5 x 1 = 5*1
//  5 x 2 = 5*2

//  5 x 10 = 5*10
/*
let kara = 1520
for(let i = 1; i <= 10; i++){
    console.log(`${kara}x${i}=${kara*i}`)
}
*/ 
/*
for(let i = 0; i<=100; i+=2){
    console.log('sdvdsfs')
}
*/ 

//let arr = [651,87,'sdsa',6545,'fgdf',165,654,'dfds',4]
/*
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
*/ 
/*
for(let i = 0; i <= arr.length-1; i++){
    console.log(arr[i])
}
*/ 
/* 
for(let i = 0; i <= arr.length-1; i++){
    if(typeof arr[i] == 'number'){
        console.log(arr[i])
    }
}
*/ 
/*
for(let i = 0; i <= arr.length-1; i++){
    if(arr[i] > 200){
        console.log(arr[i])
    }
}
*/ 
/*
let arr = []  // 20 ta

for(let i=0; i<=19; i++){
    arr.push(parseInt(Math.random() * 100))
}
console.log(arr)

for(let i = 0; i<= arr.length-1; i++){
    if(arr[i] >= 50){
        console.log(arr[i])
    }
}
*/
/*
let arr = [45, 14, 98, 88, 92, 87, 62, 67, 33, 52, 0, 91, 96, 27, 46, 9, 54, 18, 86, 39]

for(let i=0; i<=arr.length-1; i++){
    //console.log(arr[i])
}

// elem => massivni elementlari
for(let elem of arr){
    //console.log(elem)
}

// index => massivni indexlari
for(let index in arr){
    console.log(arr[index])
}
*/ 
/*
let arr = []
let num = 10
let s = 0

for(let i=1; i<=3; i++){
    arr.push(2**i)
}
console.log(arr)

for(let elem of arr){
    s+=elem
}
console.log(s)
*/ 

let arr = [45, 14, 98, 88, 92, 87, 62, 67, 33, 52, 0, 91, 96, 27, 46, 9, 54, 18, 86, 39]

let max = arr[0]

for(elem of arr){
    if(max > elem){
        max = elem
    }
}
console.log(max)





