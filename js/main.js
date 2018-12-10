import { Paquet } from 'cls_jeu_cartes.js';

document.addEventListener("DOMContentLoaded", function () {

    //let test = new cls_carte(11, 3);
    //test.afficher("plateau");
    //let test2 = new cls_carte(7, 1);
    //test2.afficher("plateau");

    var j = new Paquet(false);
    j.melanger();
    j.afficher("plateau");
    //for (i = 0; i < 60; i++) { 
    //	var t = j.tirer();
    //	t.afficher("plateau");
    //}


    //document.getElementById("plateau").innerHTML =test.couleur;
   // document.getElementById("plateau").innerHTML = j.cartes[30].valeur;

}, false);


/*
var onload = function () {
	
}
*/