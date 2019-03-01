"use strict";
/*
if (document.body === null) {
	alert("Le DOM n'est pas construit !");
} else {
	alert("Le DOM est construit");
}
*/

let elementP = document.querySelector("#paragraphe");
elementP.style.background = "red";
console.log("balise : " + elementP);
console.log("contenu : " + elementP.textContent);

let elementLi = document.querySelectorAll("li");
console.log("nb <li>: " + elementLi.length);

let lidansul = document.querySelectorAll("ul > li");
console.log("nb <li> dans <ul> : " + lidansul.length);

let liste1 = document.querySelector("#liste1");
console.log("liste1 node : " + liste1.childNodes.length);

let liste2 = document.querySelector("#liste2");

console.log("liste2 node : " + liste2.childNodes.length);
console.log("liste1 element : " + liste1.children.length);
console.log("liste2 element : " + liste2.children.length);
console.log("first node : " + liste1.firstChild);
console.log("last node : " + liste1.lastChild);
console.log("first element : " + liste1.firstElementChild);
console.log("last element : " + liste1.lastElementChild);

let figcap = document.querySelector("figcaption");
figcap.style.background = "red";

let par = document.querySelectorAll("p");
par[par.length-1].style.width = "800px";

let img = document.querySelectorAll("img");

console.log("src img : " + img[0].getAttribute("src"));
console.log("attribut img : " + img[0].getAttributeNames());;
console.log("attribut title ? : " + img[0].hasAttribute("title"));;

img[0].setAttribute("src", "https://ensweb.users.info.unicaen.fr/images/premiere_souris_1968.jpg");
img[0].removeAttribute("width");

console.log("nb elt-test : " + document.querySelectorAll(".elt-test").length);
figcap.innerHTML = "Salut je suis le best";

liste1.removeChild(liste1.lastElementChild);

let newP = document.createElement("li");
let newTxt = document.createTextNode("test");
newP.appendChild(newTxt);

let ul = document.querySelector("ul");
ul.appendChild(newP);

let h1 = document.createElement("h1");
let titre = document.createTextNode("mon titre body lol");
h1.appendChild(titre);

let body = document.querySelector("body");
body.insertBefore(h1, body.firstChild);


let p2 = document.createElement("p");
let txt2 = document.createTextNode("Salut je suis du texte mdr");
p2.appendChild(txt2);

let figure = document.querySelector("figure");
figure.parentNode.insertBefore(p2, figure);
