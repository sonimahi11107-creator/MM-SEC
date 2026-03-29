function openCareer(){

let interest = document.getElementById("interest").value;

if(interest == "technology"){
window.location.href = "technology.html";
}

else if(interest == "teaching"){
window.location.href = "teaching.html";
}

else if(interest == "medical"){
window.location.href = "medical.html";
}

else if(interest == "government"){
window.location.href = "government.html";
}

else if(interest == "business"){
window.location.href = "business.html";
}

else if(interest == "arts"){
window.location.href = "arts.html";
}

else{
alert("Please select an interest area");
}

}