window.onload = pageChargee;

function pageChargee (){
	for (var i=0;i<10;i++){
		document.getElementsByTagName("img")[i].onclick=Image;
	}
	document.getElementById("slide").onchange=slider;
	document.getElementsByClassName("boutton")[0].onclick=precedent;
	document.getElementsByClassName("boutton")[1].onclick=suivant;
}





function Image(){
	document.getElementsByTagName("img")[0].src=this.src;
	for (var i=1;i<13;i++){
		document.getElementsByTagName("img")[i].style.opacity= 0.2;
		this.style.opacity= 1;
	}
}


function slider(){
		for (var j=1;j<10;j++){
			document.getElementsByTagName("img")[0].src="../image/media/i"+this.value+".jpg"
			document.getElementsByTagName("img")[j].style.opacity= 0.2;
		}
	document.getElementsByTagName("img")[this.value].style.opacity=1;
}

// Pensez à ajouter le javascript pour les boutons suivant et precedent.