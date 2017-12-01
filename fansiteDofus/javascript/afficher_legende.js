//###############################
//#	Created by Alexis MORTELIER	#
//#		All Right Reserved		#
//###############################

window.onload=gestionaire;

function gestionaire(){

    for(j=1;j<12;j++){
    document.getElementById("f"+j).onmouseover=afficher_legendeF;
    document.getElementById("f"+j).onmouseout=desafficher_legendeF;
    }

}

function afficher_legendeF(){    
    document.getElementById("p"+this.id[1]).style.visibility="visible";
}


function desafficher_legendeF(){    
    document.getElementById("p"+this.id[1]).style.visibility="hidden";
}
