//###############################
//#	Created by Alexis MORTELIER	#
//#		All Rights Reserved		#
//###############################
$(document).ready(function() {
		$('.retour').on('click', function() { // Au clic sur un �l�ment
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Dur�e de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Retour en haut de page
			return false;
		});
	});