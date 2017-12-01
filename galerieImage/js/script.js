window.onload = pageChargee;

function pageChargee (){
for (var i=0;i<13;i++){
document.getElementsByTagName("img")[i].onclick=Image;
}
document.getElementById("slide").onchange=slider;
}





function Image(){
document.getElementsByTagName("img")[0].src=this.src;
for (var i=1;i<13;i++){
document.getElementsByTagName("img")[i].style.opacity= 0.2;
this.style.opacity= 1;
}
}


function slider(){
document.getElementsByTagName("img")[0].src="img/b"+this.value+".jpg"
for (var j=1;j<13;j++){
document.getElementsByTagName("img")[j].style.opacity= 0.2;
}
document.getElementsByTagName("img")[this.value].style.opacity=1;
}
