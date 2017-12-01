//###############################
//#	Created by Alexis MORTELIER	#
//#		All Right Reserved		#
//###############################

// définition des variables globales
window.onload=afficheur;
var m=""; 	// contiendra le message à afficher
var n=""; 	// contiendra le nombre de lettre de l'afficheur
var o=0;  	// contiendra le décalage du texte à afficher
var h=false; // si h=true affichage de l'heure, sinon affichage du message
var tempo=200; // intervalle entre chaque décalage

function afficheur(){
/* ----------------------------------------------------
	cette fonction initilise les gestionnaires d'évènements
----------------------------------------------------------*/
	setInterval(afficheMessage,tempo);
	document.getElementById("afficheur").onmouseover=heureMessage;
	document.getElementById("afficheur").onmouseout=heureMessage;
	m=document.getElementById("afficheur").innerHTML;
	n=m.length;
}

function heureMessage(){
/* ----------------------------------------------------
	cette fonction permet de basculer entre le mode
	d'affichage de l'heure et l'affichage du message
----------------------------------------------------------*/
	if(h==false){
		h=true;
	}
	else{
		h=false;
	}

}

function afficheMessage(){
	var c="";
/* ----------------------------------------------------
	cette fonction recopie le message dans l'afficheur
	en le décalant de la valeur o
----------------------------------------------------------*/
	/* à vous de jouer */
	if(h==false){
		n=m.length;
		for(i=0;i<n;i++){
			c+=m[(i+o)%n];
		}
		document.getElementById("afficheur").innerHTML=c;
		o++;
	}
	else{
		d= new Date();
		jours=new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche");
		mois=new Array("Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre");
		j=jours[d.getDay()-1];
		mo=mois[d.getMonth()];
		a=d.getDate();
		y=d.getFullYear();
		heu=d.getHours();
		min=d.getMinutes();
		sec=d.getSeconds();
		date=new String(j+" "+a+" "+mo+" "+y+" "+heu+":"+min+":"+sec+" ");
		n=date.length;
			for(i=0;i<n;i++){
				c+=date[(i+o)%n];
			}
				document.getElementById("afficheur").innerHTML=c;
				o++;
	}
}
