//###############################
//#	Created by Alexis MORTELIER	#
//#		All Rights Reserved		#
//###############################
var ctx;
window.onload=pageChargee;
var romain;
xd = new Array(0.5,0.25,0.75,0.5,0.25,0.75,0.25,0.25,0.75,0.75,0.25,0.25,0.75,0.75,0.5,0.25,0.25,0.75,0.75,0.25,0.75);
yd = new Array(0.5,0.25,0.75,0.5,0.25,0.75,0.25,0.75,0.75,0.25,0.25,0.75,0.75,0.25,0.5,0.25,0.75,0.75,0.25,0.5,0.5);
debut = new Array(0,0,1,3,6,10,15,21)

taillede=100;
var d1,d2,d3;

 function tracefond(){
ctx.fillStyle= "olivedrab";
ctx.fillRect (10, 10, 400, 150);
 	// trace le rectangle vert sur le canvas
 	// ... à ecrire !!
 }

function traceDe(n,pos){
ctx.fillStyle= "bisque";
ctx.fillRect(pos,25,taillede,taillede);

var d=Math.ceil(Math.random()*6);
var som=((-1+d)/2)*d;
for (i=0;i<d;i++){
	ctx.beginPath();
	ctx.arc(pos+taillede*xd[som+i], 25+taillede*yd[som+i], 10, 0, Math.PI*2);
	ctx.fillStyle= "grey";
	ctx.fill();
}
return d;
	// trace un dé en position 'pos' qui peut valoir 0, 1 ou 2 selon qu'il s'agit du dé 1
	// 2 ou 3
	// la valeur du dé est n

}

function pageChargee(){
	document.getElementById("jouer").onclick=jouer;
	var c = document.getElementById("mon_canvas");
  	ctx = c.getContext("2d");
  	tracefond();
}

function lancerDes(){
	d1=traceDe(1,25);
	d2=traceDe(2,150);
	d3=traceDe(3,275);


	// je lance les 3 dés et je les traces
    // tout est à faire !!
 }

function arretLancer(){
clearInterval(romain);
if((d1==1 ||d2==1||d3==1) && (d1==2||d2==2||d3==2) && (d1==4||d2==4||d3==4)){
	ctx.fillRect(25,25,350,50);
	ctx.fillStyle=rgba("255,255,255,0.5");
	ctx.fillTexte("GAAAAAAAAAAAAAAAAAAAAGGGGGGGGNNNNNNNNNN");

}

	// j'arrète de lancer les dés
	// et je regarde si c'est gagné
}

function jouer(){
	romain=setInterval(lancerDes,100);
	setTimeout(arretLancer,300);
 	// je lance des dés pendans 100 ms
 	// puis j'arrete de les lancer au bout de 3 secondes
 }
 
