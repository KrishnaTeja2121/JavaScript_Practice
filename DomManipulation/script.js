//Selecting the elements

let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
let addBtn=document.getElementById("addButton");
let result=document.getElementById("result");

// performing

let sum=parseFloat(num1) + parseFloat(num2);
console.log(sum);



//add event
addBtn.addEventListener(onclick, function (){
    result.innerHTML(sum);
})