function characterCount(text){
    let len=text.length;
    return len;
};

const results=characterCount("JavaScript");
console.log(results);


const txtToLowerCase=(text)=>{
    let lowerCase=text.toLowerCase();
    return lowerCase;

};

console.log(txtToLowerCase("TEST"));

const txtToUpperCase=(text)=>{
    let upperCase=text.toUpperCase();
    return upperCase;

};

console.log(txtToUpperCase("nodejs"));

const slicedTxt= function(text,start,end){
    let sliceTxt=text.slice(start, end);
    return sliceTxt;

};

console.log(slicedTxt("Elon is great",1,10));
