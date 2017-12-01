//###############################
//#	Created by Alexis MORTELIER	#
//#		All Rights Reserved		#
//###############################

var jeu = new Array('g','g','g','v','d','d','d');

window.onload=initjeu;

function initjeu(){
	var i;

	/* insérer ici une boucle qui va placer les balises imgs dans la page*/
	/* leur mettre des id qui permettront de savoir laquelle est cliquée*/

	for (i=0;i<7;i++){
		g = document.createElement("img");
		g.src ="imgs/"+jeu[i]+".gif";
		g.id =i;
		g.onclick= cliqueGrenouille;
		document.getElementsByClassName("grenouilles")[0].appendChild(g);
	}
	document.getElementById("partie").onclick=nouvellePartie;
}

function afficheGrenouilles(){
	// pour afficher les grenouilles, il faut mettre à jour leur propriété src
	// en fonction du contenu du tableau jeu
	for (var i=0;i<7;i++){
		document.images[i].src ="imgs/"+jeu[i]+".gif";
	}
}


function cliqueGrenouille(){
 	var c=parseInt(this.id[0]);
//quand tu cliques sur case vide ca te dit abruti
	if (jeu[c]=='v'){
	alert ("ce coup ne sert pas à grand chose !!!");
}
//Quand tu cliques sur une grenouille droite tu permutes avec la case de gauche si elle est vide
	else if (jeu[c]=='d'&&jeu[c-1]=='v'){
	permutte(c,c-1);
}
//Quand tu cliques sur une grenouille gauche tu permutes avec la case de droite si elle est vide
	else if (jeu[c]=='g'&&jeu[c+1]=='v'){
	permutte(c,c+1);
}
//quand tu cliques sur une grenouille droite tu permutes avec la case d'après celle de gauche si elle est vide
	else if (jeu[c]=='d'&&jeu[c-2]=='v'){
	permutte(c,c-2);

}
//quand tu cliques sur une grenouille gauche tu permutes avec la case d'après celle de droite si elle est vide
	else if (jeu[c]=='g'&&jeu[c+2]=='v'){
	permutte(c,c+2);

}
//Si aucune des conditions n'est possible alors pas possible
	else{
	alert("Ne peux pas sauter la grenouille devant elle")
}
}
function permutte(i,j){
	
	jeu[j]=jeu[i];
	jeu[i]='v';

	afficheGrenouilles();

	/* test de fin */
	if (jeu[0]=='d' && jeu[1]=='d'&& jeu[2]=='d'&& jeu[4]=='g'&&  jeu[5]=='g' && jeu[6]=='g' ){
		alert("C'est gagné !! On recommence !!!");
		jeu[0]='g'; jeu[1]='g'; jeu[2]='g'; jeu[3]='v'; jeu[4]='d'; jeu[5]='d'; jeu[6]='d';
		afficheGrenouilles();
	}
}

function nouvellePartie(){
	jeu[0]='g'; jeu[1]='g'; jeu[2]='g'; jeu[3]='v'; jeu[4]='d'; jeu[5]='d'; jeu[6]='d';
	 afficheGrenouilles();
}

