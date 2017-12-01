var nbMystere=-1;
var nbEssai=0;
var nbMax=11;

window.onload=init;

function init(){
	
	document.getElementById('debut').onclick=choixNombre;
	document.getElementById('test').onclick=testProposition;

}

function choixNombre() {
	nbMystere= Math.round(Math.random()*20);
	alert(nbMystere)
	alert("J'ai choisi un nombre, à vous de le trouver !");
}

function testProposition() {



var nbEntre=parseInt(document.getElementById("val").value);

		//Info sur le rapprochement du nombre Mystere
	if(nbMystere==-1){
		alert("euuuuh... Faut peut être penser a lancer le jeu non ?");
	}
	else{ nbEssai=nbEssai+1; if(nbMystere<12){
	
		if(nbEssai<nbMax+1){
			if (nbMystere > nbEntre){ 
				alert("C'est plus !");
			}
			else if (nbMystere < nbEntre){
				alert("C'est moins !");
			}
			else{
				alert("Bravo, vous avez trouvé le nombre mystere !!!");
			}


		}
		else{ 
			alert("T'as plus d'essai");

		}
	}
		//Affichage du nombre de coup restant
		if(nbEssai<nbMax){
			document.getElementById('msgNbcoups').innerHTML='Vous avez joué '+nbEssai+' coups.';
		}
		else if(nbEssai<nbMax+1){
			document.getElementById('msgNbcoups').innerHTML="Il ne vous reste qu'un seul coup !";
		}
		else{
			document.getElementById('msgNbcoups').innerHTML="Bah t'as perdu, c'est triste il te reste aucun coups :/ get REKT my friends";
		}
	}
}
