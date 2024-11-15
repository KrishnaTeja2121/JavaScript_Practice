console.log("Connected");

//! Select the elements


const btn1El= document.querySelector(".btn1"); // class
const btn2El= document.querySelector(".btn2");
const resetEl= document.querySelector(".reset");
const titleEl= document.querySelector(".title");
const bodyEl= document.querySelector("body"); // body tag passed here. This will apply for the entire body

console.log(btn1El, btn2El, resetEl, titleEl);

//! Adding Event Listeners

btn1El.addEventListener("click",function(){
    bodyEl.style.backgroundColor="yellow";
});

btn2El.addEventListener("click",()=>{
    titleEl.style.fontSize="90px";
});

resetEl.addEventListener("click", ()=>{
    bodyEl.style.backgroundColor="";
    titleEl.style.fontSize="30px";

});



