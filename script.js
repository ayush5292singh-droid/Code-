const search=document.getElementById("search");

search.addEventListener("keyup",function(){

let value=search.value.toLowerCase();

let chats=document.querySelectorAll(".chat");

chats.forEach(chat=>{

let name=chat.querySelector("h3").textContent.toLowerCase();

if(name.includes(value)){
chat.style.display="flex";
}
else{
chat.style.display="none";
}

});

});
