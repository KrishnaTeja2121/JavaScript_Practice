let count=0;

const counterEle=document.getElementById("counter");

//counterEle.innerHTML=count;
//OR
//counterEle.textContent=count;

document.getElementById("increaseBtn").addEventListener("click",function (){
    count++;
    counterEle.textContent=count;
});

document.getElementById("decreaseBtn").addEventListener("click",function (){
    count--;
    counterEle.textContent=count;
});

document.getElementById("increaseByTenBtn").addEventListener("click",function (){
    count+=10;
    counterEle.textContent=count;
});

document.getElementById("resetBtn").addEventListener("click",function (){
    count=0;
    counterEle.innerHTML=count;
});