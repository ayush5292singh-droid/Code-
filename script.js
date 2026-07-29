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
