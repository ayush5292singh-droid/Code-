let dark=false;


function toggleDark(){

dark=!dark;

if(dark){

document.body.classList.add("dark");

}

else{

document.body.classList.remove("dark");

}

}



function changeTheme(){

let color=
document.getElementById("theme").value;


document.querySelector("header")
.style.background=color;


}



function saveSettings(){

let name=
document.getElementById("profileName").value;


localStorage.setItem(
"profile",
name
);


localStorage.setItem(
"darkMode",
dark
);


document.getElementById("status")
.innerHTML=
"✅ Settings Saved!";

}



window.onload=function(){

let savedName=
localStorage.getItem("profile");


if(savedName){

document.getElementById("profileName").value=savedName;

}


};
function backupData(){

let data={
contacts:
localStorage.getItem("contacts"),

profile:
localStorage.getItem("profile")
};


localStorage.setItem(
"backup",
JSON.stringify(data)
);


alert("Backup Created ✅");

}



function restoreData(){

let data=
JSON.parse(
localStorage.getItem("backup")
);


if(data){

localStorage.setItem(
"contacts",
data.contacts
);


localStorage.setItem(
"profile",
data.profile
);


alert("Restored Successfully ✅");

}

else{

alert("No Backup Found");

}

}
