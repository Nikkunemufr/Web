window.onload=init;

//agie sur la vitesse du scroll selon le calque
function init() {
  window.addEventListener("scroll", function() {	  
    scrollSurY = this.pageYOffset;	//Prends la valeur en pixel du scroll sur l'axe des ordonnées.
    calques = document.getElementsByClassName("calque");	//variable prenant tout les element de classe calque
    for (i = 0; i < calques.length; i++) {	//boucle changeant la vitesse du scroll pour chaque calque en fonction de sa valeur
      calque = calques[i];
      profondeur = calque.getAttribute("data");
      movement = -(scrollSurY * profondeur);	//valeur négative qui remonte les calques a vitesse =/= au scroll
      vitesseDuScroll = "translate3d(0, " + movement + "px, 0)";
      calque.style.transform = vitesseDuScroll;
    }
  })
}
