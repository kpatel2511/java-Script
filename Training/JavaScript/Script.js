
console.log("Welcome !! JavaScript Learner");

        /*  Data Types  */

  /*   1. Primitive Datatype   */

  console.log("Data Types");

    //    1.1) number
     let num = 50;
     console.log(typeof num);
    //    1.2) string
     let str = 'Khyati';
     console.log(typeof str);
    //    1.3) Boolean
     let bool = true;
     console.log(typeof bool);
    //    1.4) null
     let a = null;
     console.log(typeof a);
    //    1.5) undefined
     let b;
     console.log(typeof b);

  /* 2. Non-Primitive Datatype   */

    //    2.1) Object
    //    2.2) Array
    //    2.3) function

        /*  Operators  */

    //  Arithmetic Operators

    console.log("Arithmetic Operators");

    console.log(10 + 5);
    console.log(10 - 5);
    console.log(10 * 5);
    console.log(10 / 5);
    console.log(10 % 5);
    console.log(10 ** 5);
  
    // Increment And Decrement Operator

    console.log("Increment And Decrement Operators");
    let c = 1;
    // c++;
    console.log(c++);
    console.log(c);

    let d = 1;
    // d--;
    console.log(d--);
    console.log(d);

    // Comparison Operators

    console.log("Comparison Operator (==)");

      /* == is note Consider Data Type*/

      e = 5;
      f = 6;

      console.log(e==f);
      console.log(e!=f);
      console.log(e>f);
      console.log(e<f);
      console.log(e>=f);
      console.log(e<=f);

        
      // g = "4";
      // h = 7;

      g = true;
      h = 1;

    /* ===  is compare data types */

    console.log("Comparison Operator (===)");

      console.log(e===f);
      console.log(e!==f);
     
    // Logical Operators

    // Logical OR

    console.log("Logical Operator (OR)");

    console.log(2>3 || 3>4);
    console.log(5>3 || 3>4);
    console.log(2>3 || 9>4);
    console.log(4>3 || 6>4);

    // Logical AND

      console.log("Logical Operator (AND)");

      console.log(2>3 && 3>4);
      console.log(5>3 && 3>4);
      console.log(2>3 && 9>4);
      console.log(4>3 && 6>4);


    // Logical NOT

    console.log("Logical Operator (NOT)");

    console.log(!true);
    console.log(!false);

        /*  Conditional Statement  */ 

    // if else Statement 

    console.log("if else Statement");

    let age1 = 14;

    if(age1>=18){
      console.log(" You Are Eligible");
    }else {
      console.log(" You Are NOT Eligible");
    }
     
    // if else Neasted Statement 

    console.log("if else Neasted Statement");

    let age = 23;
    let name = "Khyati"

    if(age>=18){

      if(name=="patel"){

        console.log("You Are Eligible")

      } else

      console.log("Name Not Matched");

    } else {

      console.log(" You Are NOT Eligible");

    }

    //  else if Statement 

    console.log("else if Statement");

    let l = 10;
    let j = 15;

    if(l>j){
      console.log("I is Greater");
    }
    else if(j>l)
      {
        console.log("L is Greater");
      }
      else{
        console.log("Both Are Equal");
    }

    //  Switch Statement 

    console.log("Switch Statement");

    let ch = 19;

    switch(ch){
      case 1 :
        console.log("I am 1");
        break; // it's break loop after condition true 
      case 2 :
        console.log("I am 2");
        break;
      case 3 :
        console.log("I am 3");
        break;
      default :
        console.log("You Pressed Wrong Choice");  // if not match all cases then default part executed.
    }

        /*  Loops  */ 


    //  for Loop
        console.log(" for  Loop ");

        for(var i=1;i<10;i++){
          
          // console.log(" 2 * " + i + " = " + 2*i );
          console.log(`2 * ${i} = ${2*i}`);
        }

    //  while Loop
    console.log("  while  Loop ");

     var i=1;
    while(i<=10){
      
      // console.log(" 3 * " + i + " = " + 3*i );
      console.log(`3 * ${i} = ${3*i}`);
      i++;
    }

    // do while Loop
    console.log(" do-while  Loop ");

     var i=1;
     do{
      
      // console.log(" 4 * " + i + " = " + 4*i );
      console.log(`4 * ${i} = ${4*i}`);
      i++;

    } while (i<=10)


        /*  Functions  */ 

    //  Normal Function

    // Single Parameter Pass 

    console.log(" Single Parameter ");

    function name1(a){              // Function Define in () parameter write or pass.
      console.log("hy!! " + a) // parameter Print like we, print variable.
    }

    name1("Khyati");  // Function called 

    // Also we pass Multipule Parameters

    console.log(" Multipule Parameters ");

    // let m=10;
    // let n=21;
    function add(m,n){
      console.log(m+n);
    }

    //  add(5,9);
    // add(m,n);

    // Using Return get output console outside the function 

    console.log(" Using Return get output ");

    let o=10;
    let p=21;
    function add1(o,p,q){
      return o+p+q;
    }

    console.log(add1(o,p,10));

    // Local And Global Variable in Function 

    console.log(" Local And Global Variable in Function ");

    let r=6; // It's a Global variable because r is a out-side a function.

    function local(){
      let s=9; // Local variable b because it's in a function
      console.log(r);
      console.log(s);
    }
    local();
    // console.log(r);  // r is a globle variable all can excess it.
    // console.log(s); // we get a error in this because it is a local variable we can't excess out-side the function.


    // Anonymous Function 
    // it store in let 

    console.log(" Anonymous Function  ");

    let fun = function(){
      console.log("Kpatel");
    }

    fun();

    // make Self invoke  Anonymous Function

    console.log(" Self invoke  Anonymous Function  ");

   (function(){
      console.log(" Kpatel From Ahmedabad ");
    })();


    // Arrow Function 

    console.log(" Arrow Function  ");

    // let t = (t,u) => {
    //   return t + u;
    // }

    // console.log(t(10,9));

    // Simple and short write arrow function 

    let t =(t,u) => console.log(t + u);
    t(15,4);


    /*  Arrays  */ 

    console.log(" ARRAYS  ");

    let name2 = ["Khyati", "Kpatel", "Kittu"]

    console.log(name2); // whole array print 
    console.log(name2[0]); // Print array item name 
    console.log(name2.length); // Count array length

  // In array we can Store string, numbers, boolean, null

    let Store = ["Neo", 1,true, null];

  // Push() we can add iteam in last

    console.log("Push Method");

    Store.push("Kpatel");
    console.log(Store);

  // unshift() we can add iteam first.

    console.log("unshift Method");
    
    Store.unshift("Kittu");
    console.log(Store);

    // splice() we can add iteam between array items.

    console.log("splice Method");
    
    Store.splice(2,0,"King");
    console.log(Store);

    // Loop in Array for print individual item Print

    console.log("Array Items Print without index number and individual");

    let number = [10,20,32,22,46,60];

    // for(let i=0;i<number.length;i++){

    //   console.log(number[i]);
      
    // }

    // forEach Method

    console.log("forEach Method");

    number.forEach((val,index,array) => {
      console.log(val);
    });


    // Concat, Reverse, Sort Method

    console.log("Concat Method");

    let num1 = [10,20,35,19,25,66];
    let num2 = [11,21,31,41,51,61];

    console.log(num1.concat(num2));

    console.log("Reverse Method");

    console.log(num1.reverse());

    console.log("sort Method");
    console.log(num1.sort());

    // For i /For of in array

    console.log("For in/ For of");
    
    let arr = [10,20,30,40];

    for(let ar in arr) {
      console.log(arr[ar]);
      
    }

    // Multidimensional Array

    console.log("Multidimensional Array");

    let array = [
      ["John",30],
      ["Thomas",28],
      ["Robert",22]
    ]

    console.log(array[1][0]);
    console.log(array[2][1]);

    console.log("Multidimensional whole Array value");

    // Long Method
    // for(let i=0;i<arr.length;i++){
    //   for(let j=0;j<array[i].length;j++){
    //     console.log(array[i][j]);
        
    //   }
    // }

    // Short Method
    array.forEach(data => {
      data.forEach(val => {
        console.log(val);
      })
    });


    // Objects inside array 

    let arr1 = [
      {user:1,name:"tate"},
      {user:2,name:"shelby"},
      {user:3,name:"chad"}
    ];

    console.log(arr1[0]);

// 

    for(let i of arr1){
      console.log(i.name);
    }

// 

    let [item1, item2]=arr1;
    console.log(item1.name);
    console.log(item2);
    

    // Function inside Function 

    console.log("Function inside Function");

    function fun1(){
      console.log("I am Function 1");

      function fun2(){
        console.log("I am Function 2");
      }
      fun2();
    }
    
    fun1();

    // Lexical Scope


function fun3(){
  var a = 1;
  console.log("This is Function : " + a);

  function fun4(){
    // var a = 2;
    console.log("This is Function : " + a);
  }
  fun4();
}

fun3();

// Debugger 

function fun5(){
  // debugger;
  for(let i=1;i<=5;i++){
    console.log(i);
  }
}
fun5();


// SETS - have different value

const a1 = [10,20,30,40,50];
console.log(a1);

const s=new Set([10,20,30,40,50]);
s.add(60)
s.add("Hello")
console.log(s);
s.add("Hyy!!")

for(let element of s){
  length++;
}

console.log(length);

// Maps

var map1= new Map([[1,"one"],
["fname","Patel"],
["whole number",[0,1,2,3,4]]])

console.log(map1.get("fname"));
var k = map1.keys();

for(var key of k){
  console.log(key);
}

var map2= new Map();

map2.set("name","Kittu");
console.log(map2);

// This Keyword

var obj = {
  fname: "Khyati",
  age:"23",
  fun: function(){
    console.log(this.fname)
  }
}
obj.fun();

// New  

function fun6(){
  let fName="Patel"
  this.fName= fName;
}

// console.log(new fun6());

var obj1 = new fun6();
console.log(obj.fname);

// Constructor

/*
 Constructor functions technically are 
 regular functions. There are two 
 conventions though:
*/


/* 
They are named with capital letter first.
*/ 


/* 
They should be executed only with "new" operator.
*/ 


function User(name){
  this.name=name;
}

// console.log(new User("Jack"));

let person = new User("Jack Leo");
console.log(person.name);

// Symbol 

/* A "Symbol" represents a unique identifier. */ 

let sym = Symbol("id");
let sym1 = Symbol("id");
// console.log(sym.toString);
console.log(sym.description);

console.log(sym === sym1); // false because its unique.

let id= Symbol("id");
let obj2 = {
  name3:"Surat",
  age:20
}

obj2[id]=1;
console.log(obj2);

// Recursion 

/* function call function many times its called recursion  */ 

console.log(" 1 to 10 Number Print using Recursion ")
function printNumbersRecursive(n){
  if(n<=10){
    console.log(n);
    printNumbersRecursive(n+1)
  }
}

printNumbersRecursive(1);

/* Find Factorial Using Recursion */ 

console.log(" Find Factorial Using Recursion ");

/* factorial
   5 = 5*4*3*2*1 = 120
   4 = 4*3*2*1   = 24
*/ 

function fact(n){

  if(n==0){
    return 1;
  }
  else{
    return n*fact(n-1);
  }

}

console.log(fact(4));

//  Asynchronous JavaScript

/*  JS is Synchronous   */ 

console.log(" JS is Synchronous ");

console.log(" This ");

console.log(" Is ");

console.log(" Synchronous ");

// SetTimeout

console.log(" JS is ASynchronous/ SetTimeout ");

console.log(" This ");

setTimeout(() => {
  console.log(" ASynchronous ");
},5000);

console.log(" Is ");

// Callback 

// In callback function one function call another function

console.log(" Callback ");

function fn7(val){
  console.log(val);
}

function add(a,b,callback){
  let sum = a+b;
  callback(sum);
}

add(2,25,fn7)

/*  Callback Hell  */

// console.log("Callback Hell");

// function loadingData(callback) {
//   setTimeout(() => {
//     console.log(" 1. Loading Data....");
//     callback();
//   },2000);
// }

// function collectingData(callback){
//   setTimeout(() => {
//     console.log(" 2. Collecting Data....");
//     callback();
//   },2000)
// }

// function approvingData(callback) {
//   setTimeout(() => {
//     console.log(" 3. ApprovingData....");
//     callback();
//   },1000)
// }

// function approved() {
//   console.log(" 4. Approved....");
  
// }
// Its call callback Hell

// loadingData(function(){
//   collectingData(function(){
//     approvingData(function(){
//       approved();
//     });
//   });
// });


// Promise in callback Hell

// console.log("Promise");

// function loadingData(resolve) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log(" 1. Loading Data....");
//       resolve();
//     },2000);
//   })
// }

// function collectingData(resolve){
//   return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       console.log(" 2. Collecting Data....");
//       resolve();
//     },2000)
//   })
// }

// function approvingData(resolve) {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log(" 3. ApprovingData....");
//       reject("Error : Not Fulfilled");
//     },1000)
//   })
// }

// function approved() {
//   console.log(" 4. Approved....");
  
// }
// Its call callback Hell

// loadingData().then(collectingData).then
// (approvingData).then(approved).catch((err) =>{
//   console.log(err);
// })


// Async await 

// async function Ex(){
//   await loadingData();
//   await collectingData();
//   await approvingData();
//   await approved();
// }

// Ex().catch((err) =>{
//   console.log(err);
  
// });


// setInterval and clearInterval

//  var inter = setInterval(func, 1000)

// function func(){
//   let date = new Date().toLocaleTimeString();
//   console.log(date);
// }

// setTimeout(() => {
//   clearInterval(inter);
// }, 10000);


// Call, Bind and Apply

function fun2(age,gender){
    console.log(this.fName,age,gender);
  }

var obj3  ={
  fName:"Kittu",
}

var obj4 ={
  fName:"Patel"
}

fun2.call(obj4,13,"male"); // call Method

fun2.apply(obj4,[13,"male"]); // Apply Method


var ab = fun2.bind(obj4,[13,"male"]); //bind Method
console.log(ab);

// Property Flags and Descriptor

let emp={};
emp.name="john";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp,"age",{
  value:22,
  writable:false,
  configurable:true,
  enumerable:true
});

emp.age=25;
console.log(Object.getOwnPropertyDescriptor
  (emp,"age"));

// Proto " __Proto__ "

console.log(" __Proto__ ");

// var obj5={
//   fName:"John",
// };

// obj6 = Object.create(obj5)
// obj6.lname="Smith"

// console.log(obj6.fName);

// Prototype 

function Person(name,age){
  // let person = Object.create(Person.prototype)
  this.name =name;
  this.age = age;
  // return person
}

 Person.prototype.greet = function () {
    console.log(`Hello!! ${this.name}`);  
  }

let user = new Person (" Kpatel",23)
user.greet()
console.log(user);

// class 

console.log(" ** Class ** ");

class Person1 {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greed(){
    console.log(`Hello!! ${this.name}`);
  }
}

let user1 = new Person1("John",20)
user1.greed();
console.log(user1);

// Inheritance

console.log("** Class Inheritance **");


class Animal {
  constructor(name) {
    this.name = name;
  }
  speak(){
    console.log(`${this.name} makes a noise`);
  }

  sing(){
    console.log(`${this.name} Sings Tunuk Tunuk`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let dog = new Dog ('Rufus');
dog.speak();

let cat = new Dog ('Billi');
cat.sing();