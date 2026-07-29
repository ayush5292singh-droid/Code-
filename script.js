let currentChat="";


function openChat(name){

currentChat=name;

document.getElementById("home").classList.add("hidden");

document.getElementById("chatScreen").classList.remove("hidden");

document.getElementById("chatName").innerHTML=name;

loadMessages();

}



function goBack(){

document.getElementById("chatScreen").classList.add("hidden");

document.getElementById("home").classList.remove("hidden");

}



function sendMessage(){

let input=document.getElementById("messageInput");

let text=input.value.trim();


if(text==="") return;


let messages=JSON.parse(
localStorage.getItem(currentChat)
) || [];


messages.push(text);


localStorage.setItem(
currentChat,
JSON.stringify(messages)
);


input.value="";

loadMessages();

}



function loadMessages(){

let box=document.getElementById("messages");

box.innerHTML="";


let messages=JSON.parse(
localStorage.getItem(currentChat)
) || [];


messages.forEach(msg=>{

box.innerHTML+=
`
<div class="message">
${msg}
<br>
<small>${new Date().toLocaleTimeString()}</small>
</div>
`;

});


box.scrollTop=box.scrollHeight;

}
