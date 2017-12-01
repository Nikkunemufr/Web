var art=document.getElementsByTagName("article");


window.onload=pageChargee;

function pageChargee(){
  for(i=0;i<12;i++){
    art[i].onclick=tailleArticle;
  }
}

function tailleArticle(){
  //Cacher tout les paragraphes qui sont directement enfant aux articles, dans tous les articles.
  //Redimmenssionner tous les articles.
  var detail=document.querySelectorAll(".details");
  for(i=0;i<12;i++){
    art[i].style.width='400px';
    if(detail.length>0){
      for(j=0;j<detail.length;j++){
        detail[j].style['display']='none';
      }
    }else{
      alert("Pas de details trouvé 1");
    }
  }
  //variable qui récupère le numéro de l'article cliqué
  var h=this.id.substring(4,this.id.length)-1;
  //Agrandissement de l'article cliqué
  art[h].style.width='90%';
  //Afficher details de l'article cliqué
  detail[h].style['display']='block';
  //Variables qui réupèrent l'adresse et enlèvent l'ancrage
  var AdresseComplete=document.location.href;
  var Adresse=AdresseComplete.substring(0,AdresseComplete.lastIndexOf("/")+14)
  //Change le lien de la page pour aller au lien d'ancrage de l'article cliqué
  document.location.href=Adresse+'#'+this.id;
}
