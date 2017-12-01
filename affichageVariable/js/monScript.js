//###############################
//#	Created by Alexis MORTELIER	#
//#		All Right Reserved		#
//###############################
window.onload = pageChargee;

function pageChargee () {

	// initialise un timer qui appellera la fonction rafraichiPage toutes les secondes
	window.setInterval(rafraichiPage,1000);

	// mettre ici les gestionnaires d'évènement des sliders
	document.getElementById("sh2").onchange=changeTailleH2;
	document.getElementById("sa").onchange=changeTailleS;
	document.getElementById("ima").onchange=changeTailleImages;
}

function changeTailleH2(){
	//change la taille de la police des titres H2 avec le slide sh2
	for ( var i=0;i<document.getElementsByTagName("h2").length;i++){
	document.getElementsByTagName("h2")[i].style.fontSize=this.value+"px";
}
}
function changeTailleS(){
	/* change la taille de la police des textes de classe ajustable */
	for ( var i=0;i<document.getElementsByClassName("ajustable").length;i++){
		document.getElementsByClassName("ajustable")[i].style.fontSize=this.value+"px";
}
}
function changeTailleImages(){

	/* change la taille des images avec le 3eme slider */
	for ( var i=0;i<document.getElementsByTagName("img").length;i++){
		document.getElementsByTagName("img")[i].style.width=this.value+"%";
}
}

function rafraichiPage(){
	
	//Temps restant avant le nouvelle an
	var jours= new Date();
	var annee=jours.getFullYear();
	var nouvellean= new Date(parseInt( annee)+1,0,0);
	var temps= Math.ceil((nouvellean-jours)/1000/60/60/24);

	document.getElementById("date1").innerHTML=jours;
	document.getElementById("datena").innerHTML=temps;

	//boite fait une largeur de "nombre de secondes"px
	var seconde=jours.getSeconds();
	document.getElementById("boite").style.width=seconde+"px";

	//Tableau des jours
	var myArray = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

	//Quel jour on est
	var day= jours.getDay()-1;
	var jouractuel= myArray[day];

	document.getElementById("jour").innerHTML=jouractuel;
	
	//Afficher Jours de la semaines
	document.getElementById("lesjours").innerHTML=myArray.join(" ");

	//jour par ordre alphabetique
	document.getElementById("jt").innerHTML=myArray.sort().join(" ");

	//jour par ordre inverser
	document.getElementById("inv").innerHTML=myArray.reverse().join(" ");	

	//nombre aléatoire
	var nbrandom= Math.random()*100;
	document.getElementById("nba").innerHTML= nbrandom;

	//Inférieur
	document.getElementById("inf").innerHTML=Math.floor(nbrandom);
	
	//Supérieur
	document.getElementById("sup").innerHTML=Math.ceil(nbrandom);

	//etoile
	c="";
	for(var j=0;j<40;j++){
		if(Math.random()*100<nbrandom){
			c=c+"*";
		}
		else{
			c=c+"&nbsp";
		}
	}

	document.getElementById("carre").innerHTML=c;

	document.getElementById("pour").innerHTML=Math.round(nbrandom)

	//Suite de fibolanci

	var N=parseInt(document.getElementById("N").value);

	
Fibo= new Array(1,1);
	for(k=2; k<N;k++){
	Fibo[k]=Fibo[k-2]+Fibo[k-1];
	}
document.getElementById("fibo").innerHTML=Fibo.join(" ");

	// ce qui suit est là pour vous aider
	// mais attention, il faut remplacer les "..." 
	// par quelque chose de plus utile !!

	// document.getElementById("date1").innerHTML= ... ;
    // document.getElementById("datena").innerHTML=...;	
	// document.getElementById("boite").style.width=...;
    // document.getElementById("jour").innerHTML=...;

    // document.getElementById("lesjours").innerHTML=...;
    // document.getElementById("nba").innerHTML=...;

	// document.getElementById("inf").innerHTML=...;
    // document.getElementById("sup").innerHTML=...;
    // document.getElementById("pour").innerHTML=...;

    // document.getElementById("jt").innerHTML=...;
    // document.getElementById("inv").innerHTML=...;

	// document.getElementById("carre").innerHTML=...;

    // N=parseInt(document.getElementById("N").value);
	// document.getElementById("fibo").innerHTML=fibbo(N);

}
