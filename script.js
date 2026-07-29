let contacts =
JSON.parse(localStorage.getItem("contacts")) || 
[
{name:"Rahul",type:"Personal"},
{name:"Priya",type:"Personal"}
];


const list=document.getElementById("contactList");


function displayContacts(){

list.innerHTML="";

contacts.forEach(person=>{

list.innerHTML +=

`
<div class="contact">
<div class="avatar">👤</div>

<div>
<h3>${person.name}</h3>
<p>${person.type}</p>
</div>

</div>
`;

});

}


displayContacts();



function showAddContact(){

document.getElementById("home")
.classList.add("hidden");

document.getElementById("addScreen")
.classList.remove("hidden");

}



function addContact(){

let name=
document.getElementById("nameInput").value;


if(name==="") return;


contacts.push({
name:name,
type:"Personal"
});


localStorage.setItem(
"contacts",
JSON.stringify(contacts)
);


backHome();

}



function createGroup(){

let groupName=
prompt("Enter group name");


if(groupName){

contacts.push({
name:groupName,
type:"Group 👥"
});


localStorage.setItem(
"contacts",
JSON.stringify(contacts)
);


displayContacts();

}

}



function backHome(){

document.getElementById("addScreen")
.classList.add("hidden");

document.getElementById("home")
.classList.remove("hidden");

displayContacts();

}
