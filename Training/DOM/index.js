
/*  __ This Are Selectors in DOM __*/ 

// getElementsByTagName()

var a = document.getElementsByTagName('li');
console.log(a);

// getElementsByClassName()

var b = document.getElementsByClassName('hero');
console.log(b);

// getElementsById()

var c = document.getElementById('he');
console.log(c);

// querySelector()

var d = document.querySelector('li');
console.log(d);

// querySelectorAll()

var e = document.querySelectorAll('.qs');
console.log(e);

// previousElementSibling

// console.log("Element Siblings");

// var f= document.querySelector('.hero');
// if(f.previousElementSibling == null){
//     console.log("Siblings not present")
// }else{
//     console.log(f.previousElementSibling);
// }

console.log("Element Siblings");
var f= document.querySelectorAll('.hero');
f.forEach((ele) => console.log(ele.previousElementSibling))

// Append child 

console.log("Append child");

// const ul = document.querySelector('ul');
const newE = document.createElement('li');
newE.textContent = "Giga Chad"
// ul.appendChild(newE);

// remove child

const ul = document.querySelector('li');
ul.remove();

// replace child

const list = document.querySelector('ul');
const childToChange = list.children[1];
const newLi = document.createElement('li');
newLi.textContent='Giga Chad';

list.replaceChild(newLi,childToChange)

// Parent node

console.log("Parent Element");

var parent = document.querySelector('ul');
var p = parent.parentElement;
console.log(p);

console.log("Parent node");

var parent = document.querySelector('ul');
var p = parent.parentElement;
console.log(p);

/*___________________________________________________________*/ 

console.log(" Inner text & text content ");

var j = document.querySelector('h2').innerText;
console.log(j);

console.log("-----------------------------");

var j = document.querySelector('h2').textContent;
console.log(j);

// Adjacent Element

console.log("Adjacent Element");

var target = document.querySelector('.dev');

var newk = '<b> Web Developer </b>';

target.insertAdjacentHTML("beforebegin",newk);

// Inner & Outer html 

console.log("__Inner & Outer html__");

let aa = document.querySelector('.qs');
aa.innerHTML='<i>Darshan Raval</i>'
console.log(aa.innerHTML);

let av = document.querySelector('.qs');
av.outerHTMLHTML='<i>Darshan Raval</i>'
console.log(av.outerHTMLHTML);

// 