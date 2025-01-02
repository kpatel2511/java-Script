// console.log("khyati Patel");

// Comments
// this is js page

/*  js
script.js file
*/

/* Vriables */

// let is a keyword a is a variable

/* var  */
var name1 = "Kpatel";

var name1 = "khyati patel";

// console.log(name1);

// let 

let name2 = "khyati patel";

name2 = "Kpatel";

// console.log(name2);

// Const 

const name3 = "kittu"
// name3 = "patel"
// console.log(name3);

/* Implicit Type Conversion */

// result='1'+null
// result='1'- 1
// result='3'- null
// result='1'+ 'Hello'
// console.log(result);
// console.log(typeof result);

/* Explicit Type Conversion */

result1=20.222
// result=String(result1);
result=parseInt(result1);
// console.log(result);
// console.log(typeof result);


/* Operators */
// Arithmetic Operator

// console.log(10+5)
// console.log(10-5)
// console.log(10*5)
// console.log(10/5)
// console.log(11%5)
// console.log(10**5)


/* Incr_Dec Operator */

// let a=1;
// a=a+1;
// a++;
// ++a;
// console.log(a++);
// console.log(a);


/* Comparison Operator */


// a=6;
// b=6;

// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);


// == (not compare datatype) vs === (also compare datatype)

c="8";
d=8;
// console.log(c===d);
// console.log(c!==d);

/* Logical Operator */

// Logical OR 

console.log(4>3 || 3>4);

// AND 

console.log(2>3 && 5>4);

// NOT 

console.log(!false);

// CONDITIONAL

/* if else */

let age=21;

if(age>=18){
    console.log("You Are Eligible")
}
else{
    console.log("You Are Not Eligible")
}


/*  else if */

// let a=20;
// let b=20;

// if(a>b){
//     console.log("A is Greater");
// }else if(b>a)
// {
//     console.log("B is greater");
// }
// else{
//     console.log("Both Are Equal");
// }


/*  Switch */

let ch=2;
switch(ch){

    case 0 :
    console.log(" I Am 0 ");
    break;

    case 1 :
    console.log(" I Am 1 ");
    break;

    case 2 :
    console.log(" Not Match ");
    break;

}


// Loops

/* FOR LOOP */

// for(var i=1; i<=20;i++){
//     // console.log("Hy!!Kpatel");
//     console.log(i);
// }

// for(var i=1; i<=10;i++){
//     // console.log("4  *  " + i + " = " + 4*i)
//     console.log(`2 * ${i} = ${2*i}`)
// }

/* While LOOP */


// var i=1;
// while(i<=10)
// {
//     console.log("4  *  " + i + " = " + 4*i);
//     i++;
// }


/* do While LOOP */

// var i=1;
// do{
//     console.log(`3 * ${i} = ${3*i}`);
//     i++;
// }while(i<=10)


// FUNCTIONS

// function name(a){
//     console.log("Hello " + a);
// }

// name("Learners");

// function add(b,d){
//     console.log( b + d);
// }

// add(2,3);

// let a=5;  // Global variable because it is outside the function


// function local(){

// let b=3; // local variable because it is inside a function

// // console.log(b);
// }
// local();

// console.log(b); // "b" is a local variable thats why we can't call
//                 //    out side the function

// Anonymous Function

let fun= function(){
    console.log("Kpatel1104");
}

fun();

/* Another Way Write Anonymous Function  self invoke function */

(function(){
    console.log("CSE");

})
();

//  Arrow Function 

// let a= (a,b) => {
//     return a + b;
// }
// console.log(a(2,3));

// Simple write function

 let e= (e,f) => console.log(e+f);

 e(2,4);


//  Arrays

let name = ["Khyati","patel","kittu"]

// name.push("kpatel"); // add in last (after kittu name)

// name.unshift("My");     // add in first (before khyati name)

name.splice(1,0,"cena");

console.log(name);
// console.log(name[0]);
// console.log(name.length);

// let num = [10,20,35,19,25,60];

// console.log(num);

// for(let i=0; i<num.length; i++)
// {
//     console.log(num[i]);
// }

// let num = [10,20,35,19,25,60];
// num.forEach((val,index,array) => {
//     console.log(val)
// });

// new 

// let num = [10,20,30,40,50,60];

// let a = num.forEach((val,ind,array) => {
//     return val;
// });

// console.log(a); // undefind because foreach it works on same array not share in other array

// let num2 = [10,20,30,40,50,60];

//  num.map((val,ind,array) => {
//     console.log (val + 10);
// });

// console.log(num2);

// Concat in array

// let num = [10,20,30,40,50,60];
// let num2 = [11,21,31,41,51,61];

// console.log(num.concat(num2));
// console.log(num.indexOf(20));
// console.log(num.reverse());
// console.log(num.sort());

// let a = num.slice(1,4);
// console.log(a);

// let a = num.filter((val,ind,arr) => {
//     if(val >=10 && val<=25){
//         return val;
//     }
// });
// console.log(a);

// let a = num.find((val,ind,arr) => {
//     if(val >=10 && val<=25){
//         return val==10;
//     }
// });
// console.log(a);


// Split

// let num = '10,20,30'

// let arr = num.split(',');
// arr.forEach(element => {
//     console.log(element);
// });

// console.log(arr);

// let jo = arr.join(" And ");
// console.log(jo);

// Map Function

const value = [1,2,3,4,5,6,7,8,9,10]

// const detailsMap = value.map((num,index,array) => {
//    return `Index ${index} : ${num} (from array ${array})`
// });

// console.log(detailsMap);
// console.log(value);

const detailsMap = value.map(num => num * num )
 
 console.log(detailsMap);
 console.log(value);

//  For in  & For of

/* For in */

// let arr = [10,20,30,40];

// for(let ar in arr)
// {
//     console.log(ar);
// }

/* For of */

// let arr1 = [10,20,30,40];

// for(let ar of arr1)
// {
//     console.log(ar);
// }

/* Multidimensional Array */

// let arr = [ 
//     ["Khyati", 30],   // 0
//     ["Kittu", 28],   // 1
//     ["Patel", 22]   // 2
// ]

// console.log(arr[1]);
// console.log(arr[1][0]);

/* First Method*/

// let arr = [ 
//     ["Khyati", 30],   // 0
//     ["Kittu", 28],   // 1
//     ["Patel", 22]   // 2
// ]

// for( let i=0; i<arr.length; i++)
// {
//     for(let j=0; j<arr[i].length; j++){
//         console.log(arr[i][j]);}
// }

/* Second Method*/

// let arr = [ 
//     ["Khyati", 30],   // 0
//     ["Kittu", 28],   // 1
//     ["Patel", 22]   // 2
// ]

// arr.forEach(data => {
//     data.forEach(val => {
//         console.log(val);
//     })
// });

/* Third Mathod*/

// let arr = [ 
//     ["Khyati", 30],   // 0
//     ["Kittu", 28],   // 1
//     ["Patel", 22]   // 2
// ]

// for(let ar of arr){
//     for(i of ar){
//         console.log(i);
//     }
// }


/*  Copy AND Spread  */

// Copy 

let arr1 =["Khyati", 301, true];
let arr2 =arr1.slice(0);

arr2.push("Surat");

console.log(arr1);
console.log(arr2);

// Spread 

let arr3 =["Kittu", 401, "IT"];
let arr4 =[...arr3];

arr4.push("Ahmedabad");

console.log(arr3);
console.log(arr4);

   /*  Array Destructuring   */

   let arrA=["thomas", "Chad","Neo", "Magnus", "Alis"];

//    let item1= arrA[0];
//    let item2= arrA[1];

let [item1, item2,item3,...item4] = arrA;

   console.log(item1);
   console.log(item2);
   console.log(item3);
   console.log(item4);

/* Objects */

let obj = {
    "name":"Khyati",
    "age":23,
    "last name":"patel",
    fun: function(){
        console.log("I am Function")
    },
    arr:[20,30,40]
}

// console.log(obj["last name"]);
// obj.fun();
//  console.log(obj.arr);

// console.log(obj);

for(let i in obj){

    console.log(i);
    // console.log(obj[i]);
}


  /* Object Inside Array */

  let arr = [
    {user:1,name:"Khyati"},
    {user:2,name:"Kpatel"},
    {user:3,name:"Kittu"},
    {user:4,name:"Kp"}
  ];
//   console.log(arr[0]);

//   for(let i in arr){
//     console.log(arr[i]);
//   }

// for(let i of arr){
//     console.log(i.name);
// }

