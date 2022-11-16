//////////////////////////switch statement////////

// let day = 2;

// switch(day){
//     case 1:
//     console.log("sunday");
//     case 2:
//     console.log("monday");
// }

//////////////////////// while loop ////////////////

// let i = 0;
// while(i<=10){
//     console.log(i)
//     i++
// }
// console.log(i+1);

// let num = 10;
//  let total = 0;
// let i = 0;

// while(i<=10){
//     total = total + i;
//     i ++
// }

// console.log(total)

//   /for loop///////

// for loop in Array

// let arr = ["apple", "appl", "banana"];
// for(i=0; i<=arr.length ; i++){
//     let newArr = [];
//     newArr.push(console.log(arr[i]));
//     console.log(newArr);

// }

// let i = 0;
// while(i<=arr.length){
//     console.log(arr[i]);
//     i++
// }

// array

// array destructuring
// const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);

// myArray = ["values1","values2","values3"];

// let [val1,val2] = myArray;
// console.log(val1);
// console.log(val2);

// const myArray = ["value1", "value2", "value3","value4"];

// let = [val1,val2,...myNewArray] = myArray;

// console.log(val1);
// console.log(val2);
// console.log(myNewArray);

// Object

// let person = {
//     name : "rehman",
//     height : 5.10,
//     qualification :"software developer",
//     hobbies : ["programming","acting", "sleeping"]
// }

// console.log(person.hobbies);

// person.gender = "male";
// console.log(person);

// function

// function myProgram (number){
//     if(number %2===0){
//         return true
//     } else{
//         return false
//     }

// }
// console.log(myProgram(5));

// function myNewPro (string){
//     return string[0]

// }

// console.log(myNewPro("rehman"));

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);

// const helloLove = function(){
//     console.log("hello");
// }
// helloLove();

// const myName = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(myName(5,5));

// const isEven = (number) =>{
//     return number%2===0
// }
// console.log(isEven(9));

// functions inside function
// function app(){
//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }

//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();

// function myApp  () {
//     const myName = () =>{
//         console.log("hello world")

//     }

// }

////////////////////rest parameter/////////

// function myFunc(a,b,...c){
//   console.log(`a is ${a}`)
//   console.log(`b is ${b}`)
//   console.log(`c is ${c}`)
// }
// myFunc(2,3,4,5,6,7);

// function myFun(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;

//     }
//     return total;

// }

// const ans = myFun(1,2,3,4,5);
// console.log(ans);

// param destructuring

// object
// react

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// function printDetails({firstName, gender, age,city}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
//     console.log(city);
// }

// printDetails(person);

// callback functions

// function myFunc2(name){
//     console.log("inside my func 2")
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..")
//     callback("harshit");
// }

// myFunc(myFunc2);

// function myFunc2 (name){
//     console.log("hello there");
//     console.log(`hi my name is ${name}`);
// }

// function myFunc(callback){
//     callback("maani")
//     console.log("salam")
// }

// myFunc(myFunc2);

// function func1(){
//     function func2 (){
//         console.log("hello there")
//     }
//     return func2();
// }

// const name  = func1();
// console.log(name);

////////////////////////////////for each///////

// let numbers = [ 4, 2,5, 8];

// function myfunc(number,index){
//     console.log(`the number is ${number}  and index is ${index} `)

// }

// for(i=0; i<numbers.length ; i++){
//     myfunc(numbers[i],i);
// }

// numbers.forEach(myfunc);

// numbers.forEach(function(number , index){
//   console.log(`number is ${number} and index is ${index} = and answer is ${number*3} `)
// })

// const users = [
//   { firstName: "harshit", age: 23 },
//   { firstName: "maani", age: 21 },
//   { firstName: "maddy", age: 22 },
//   { firstName: "hammad", age: 20 },
// ];

// users.forEach(function(user,age){
// console.log(`the name of person is ${user.firstName}`)
// console.log(`the age of ${user.firstName} is ${user.age}`)
// })

// users.forEach((user,index) => {
//   console.log(`the name of person is ${user.firstName}`);
//   console.log(`the age of ${user.firstName} is ${user.age}`);
//   console.log(`and index is ${index}`)
// });

// map method
// const numbers = [3,4,6,1,8];

// const square = (number)=>{
//     return number * number

// }
// const newSquare = numbers.map(square);
// console.log(newSquare);

// const numbers = [4, 6, 8, 9, 10, 12];
// const cubeRoot = (number,index) => {
//   return `number is ${number*number*number}  and index is  ${index}`;
// };

// const newArray = numbers.map(cubeRoot);
// console.log(newArray);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "maani", age: 21},
//     {firstName: "maddy", age: 22},
//     {firstName: "garima", age: 20},
// ]

//  const arr =  users.map((user)=>{
//     return user.firstName
// })

// console.log(arr);

// const numbers = [1,3,2,6,4,8];

// const  isEven = function(number){
// return number%2===0
// }
// const newNumbers = numbers.filter(isEven)
// console.log(newNumbers);

// const evenNumber = numbers.filter((number)=>{
//     return number%2===0

// })
// console.log(evenNumber);

// reduce method

// const numbers = [1,2,3,4,5, 10];
// const method = numbers.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// },100)

// console.log(method);

// const userCart = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "laptop", price: 22000 },
//   { productId: 3, productName: "tv", price: 15000 },
// ];

// const totalAmount = userCart.reduce((totapPrice,CurrentProduct)=>{
//     return totapPrice + CurrentProduct.price

// },0)
// console.log(totalAmount);

// sort method

// const products = [
//   { productId: 1, produceName: "p1", price: 300 },
//   { productId: 2, produceName: "p2", price: 3000 },
//   { productId: 3, produceName: "p3", price: 200 },
//   { productId: 4, produceName: "p4", price: 8000 },
//   { productId: 5, produceName: "p5", price: 500 },
// ];

// const set = products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// })
// console.log(set);
// console.log(products);

// high to low ma b - a  hoga bs

// find method
// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength (string){
//     return string.Length ===3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "maddy"},
//     {userId : 3, userName: "rehman"},
//     {userId : 4, userName: "rehmo"},
//     {userId : 5, userName: "maani"},
// ];




// const names = users.find((user)=>user.userId===3);
// console.log(names);




//  every method
//  const numbers = [2,4,6,9,10];

//  const evryM = numbers.every((number)=> number %2===0 );
//  console.log(evryM);

//  const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 2000},
// ]

//  const listProducts = userCart.every((cartItem)=> cartItem.price<30000);
// console.log(listProducts);

// / fill method 
// value , start , end 


// const Myarray = new Array(10).fill(9);
// console.log(Myarray);

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(8,3,6);
// console.log(myArray);








