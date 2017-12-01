var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //propriété des animations appliquer aux fieldsets

$(".next").click(function(){

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//on affiche la partie suivante sur la barre de progression
	$("#barre_de_progession li").eq($("fieldset").index(next_fs)).addClass("active");

	//on affiche le fieldset suivant
	next_fs.show();
	//On cache le fieldset actuelle
	current_fs.animate({opacity: 0}, {
		step: function(x) {
			//On réduis l'opacité du fieldset actuelle
			scale = 1-(1 - x) * 0.2;
			//On applique un effet donnant l'impression que le fieldset suivant arrive de la droite
			left = (x * 50)+"%";
			//On change l'opacité du fieldset suivant a 1
			opacity = 1 - x;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		},
		duration: 600,
		complete: function(){
			current_fs.hide();
		},

	});
});

$(".previous").click(function(){

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	//Enleve la class "active" du fieldset actuelle sur la barre de progession afin d'indiquer que nous sommes a l'étape precedente
	$("#barre_de_progession li").eq($("fieldset").index(current_fs)).removeClass("active");

	//Affiche le fieldset precedent
	previous_fs.show();
	//Cache le fieldset actuelle
	current_fs.animate({opacity: 0}, {
		step: function(x) {
			//On réduis l'opacité du fieldset actuelle
			scale = 0.8 + (1 - x) * 0.2;
			//On applique un effet donnant l'impression que le fieldset precedent arrive de la gauche
			left = ((1-x) * 50)+"%";
			//On change l'opacité du fieldset precedent a 1
			opacity = 1 - x;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		},
		duration: 600,
		complete: function(){
			current_fs.hide();
			animating = false;
		},
	});
});

$(".submit").click(function(){
	return false;
})
