//###############################
//#	Created by Alexis MORTELIER	#
//#		All Right Reserved		#
//###############################

// apostrophe : &rsquo;
//Tableaux contenant du contenu lié à chaque classes de personnages :
var classe= new Array("Féca","Osamodas","Enutrof","Sram","Xélor","Ecaflip","Eniripsa","Iop","Crâ","Sadida","Sacrieur","Panda");
var indiceClasse= new Array("Protecteur","Invocateur de créatures","Chasseur de trésors","Assassin","Maître du temps","Combattant imprévisible","Guérisseur","Guerrier téméraire","Archer","Sorcier sylvestre","Berserk","Bagarreur assoiffé");
var histoireClasse = new Array("Les Fécas sont de loyaux protecteurs toujours sur la défensive. Ils sont appréciés dans les groupes d'aventuriers pour leurs armures élémentaires et leur capacité à encaisser les coups durs.<br>Ils sont également maîtres dans l&rsquo;art des signes magiques : quand il va y avoir du grabuge, les Fécas sortent leurs glyphes !","Les Osamodas sont des dompteurs nés ! Ils ont le pouvoir d'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu'il en est...<br>Si vous êtes de son côté, un Osamodas sera aux petits soins pour vous. Dans le cas contraire, peut-être terminerez-vous votre vie sous la forme d&rsquo;une botte ou d'un bonnet fourré.","Les Enutrofs sont des chasseurs de trésor avides de kamas, qui malgré leur grand âge courent comme des dragodindes à la vue d'un coffre bien rempli.<br>Ils sont experts dans l&rsquo;art de ralentir leurs ennemis : ils peuvent ainsi les harceler avant de les assommer à grands coups de pelle le moment venu !","Les Srams sont des assassins qui aiment les bourses, rebondies de préférence.<br>Trousser les pans d&rsquo;une tunique, tâter le fond d&rsquo;une poche, faire preuve de doigté, palper enfin des bijoux tant convoités avant de poser un piège ou d&rsquo;asséner un coup mortel, voilà la vie d&rsquo;un disciple de Sram !","Les Xélors sont des mages qui maîtrisent le temps et toutes les mécaniques qui donnent l&rsquo;heure : carillons, horloges et pendules leur obéissent au doigt et à l&rsquo;œil.<br>Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.","Les Ecaflips sont des guerriers joueurs qui se fourrent dans les endroits où l'on peut gagner gros, et perdre beaucoup... Un Ecaflip bien dans sa peau parie sans arrêt, pour tout et pour rien.<br>Mais attention, il prend le jeu très au sérieux et ira même jusqu&rsquo;à risquer sa vie sur un jet de dés pour tenter de remporter la mise...","Les Eniripsas sont des guérisseurs qui soignent d'un simple mot. Ils utilisent le pouvoir de la parole pour soulager les souffrances de leurs alliés, mais parfois aussi pour blesser leurs ennemis.<br>Certains Eniripsas sont même devenus de véritables arpenteurs du verbe, des rôdeurs des langues oubliées.","Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est sûre : les Iops savent faire parler les armes. D&rsquo;ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne santé.<br>Leur tempérament impétueux fait des Iops des paladins de l&rsquo;extrême, capables du meilleur... comme du pire !","Les Crâs sont des archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche.<br>Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils ne laissent aucun répit à leurs adversaires !","Les Sadidas sont des invocateurs qui empoisonnent la vie de leurs ennemis !<br>Apprivoiser les ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.","Les Sacrieurs sont des berserkers qui décuplent leurs forces dès qu'ils sont frappés !<br>N&rsquo;ayant pas peur de recevoir des coups, ni de s&rsquo;exposer aux blessures, ils seront souvent en première ligne, prêts à verser le premier sang ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières...","Les Pandawas sont des guerriers adeptes des arts martiaux qui savent faire des folies de leur corps ! Ils peuvent même en faire avec le corps des autres...<br>Le Pandawa sait comment soulever les foules, il porte ses alliés sur ses épaules pour mieux les protéger. Quant à ses ennemis, il les enverra valser dans le décor, avant de fêter sa victoire avec une bonne rasade de lait de bambou !");

//Appel du gestionnaire d'évènement au chargement de la page:
window.onload=init

//Gestionnaire d'évènements :
function init(){
  //Generation des symboles et logos de classe:
  for(i=1;i<13;i++){
    //Generation des symboles
		x = document.createElement("div");
		x.style.backgroundImage="url(../image/classes/logos/symbol_"+i+".png)";
		x.id ="symbol_"+i;
		x.onmouseout=horsSymbol;
		x.onmouseover=survolSymbol;
		document.getElementById("selectclasse").appendChild(x);
    //Boucle permettant de créer deux logos dans chaque div symbol
    for(j=0;j<2;j++){
		y = document.createElement("img");
		y.src="../image/classes/logos/mini_"+i+"_"+j+".png";
		y.id="bg_"+i+j;
		y.title=classe[i-1];
		document.getElementById(x.id).appendChild(y);
		y.onmouseout=horsLogo;
		y.onmouseover=survolLogo;
		y.onclick=clickLogo;
    }
	}
}

function horsSymbol(){
  document.getElementById(this.id).getElementsByTagName("img")[0].style.opacity="0";
  document.getElementById(this.id).getElementsByTagName("img")[1].style.opacity="0";
}

function survolSymbol(){
  document.getElementById(this.id).getElementsByTagName("img")[0].style.opacity="1";
  document.getElementById(this.id).getElementsByTagName("img")[1].style.opacity="1";
}

function horsLogo(){
  this.style.border="none";
}

function survolLogo(){
  this.style.border="2px solid gold";
}

function clickLogo(){
  //Enleve le paragraphe d'instruction
  document.getElementById("instuction").style.display="none";
  var t=document.getElementById("interface");
  t.style.display="block";
  t.style.backgroundImage="url(../image/classes/logos/"+this.id+".png)";
  //Variables qui récupèrent le numéro de l'image cliqué afin d'utiliser les tableaux
  var u=this.id;
  var v=u.substring(3,u.length-1)-1;
  document.getElementById("nomclasse").innerHTML=classe[v];
  document.getElementById("indiceclasse").innerHTML=indiceClasse[v];
  document.getElementById("histoireclasse").innerHTML=histoireClasse[v];
  
}


