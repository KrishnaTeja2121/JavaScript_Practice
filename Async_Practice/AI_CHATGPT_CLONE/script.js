


document.addEventListener("DOMContentLoaded", ()=>{
    const chatForm=document.getElementById("chatForm");
    const userInput=document.getElementById("userInput");
    const chatMessage=document.getElementById("chatMessages");
    const sendButton=document.getElementById("sendButton");

    userInput.addEventListener("input",()=>{
        userInput.style.height="auto";
        userInput.style.height= userInput.scrollHeight+'px';

    });

    chatForm.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const message=userInput.value.trim();
        if(!message){
            return;
        }
        
        //clear the input
        userInput.value="";
        userInput.style.height="auto";
        sendButton.disabled=true;

         // to show typing

    try {
        const res=generateResponse(message);
        addMessage(res,false)
        
    } catch (error) {
        
    }finally{

    }
    });
});

//generate response function
async function generateResponse(prompt){
    const response=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB3EK-rUJZED6XGAEkgFWEm33xPzsrTmHc`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            
            contents : [{
                parts: [{
                    text: prompt
                }]
            }]
        })
    });
    if(!response.ok){
        throw new Error("Failed to generate response");
    }

    const data=await response.json();
    console.log(data.candidates[0].content.parts[0].text);
    return data.candidates[0].content.parts[0].text;
    
    
}

//add user message to chat

function addMessage(text, isUser){
    const message=document.createElement("div");
    message.innerHTML=`<div class="message ${isUser ? "user" : "ai"}">${text}</div>`;
    chatMessage.appendChild(message);
}