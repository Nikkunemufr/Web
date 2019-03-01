"use strict"

let note = document.querySelectorAll(".note");
let notes = document.querySelector("#notes");
for(var i =0; i<= note.length - 1 ;i++){
	let p = document.createElement("p");
	let txt = document.createTextNode((i+1) +" " + note[i].textContent);
	p.appendChild(txt);
	notes.appendChild(p);
	note[i].innerHTML = "["+ (i+1) +"]";
	note[i].style.fontSize = "10px";
}

