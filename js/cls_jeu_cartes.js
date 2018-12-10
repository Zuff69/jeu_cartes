import { Carte54 } from 'cls_carte.js';

class JeuCartes54 {

    constructor(vide) {
        this.cartes = [];
        if (!vide) {
            for (let val = 2; val < 15; val++) {
                for (let coul = 0; coul < 4; coul++) {
                    let nouvelleCarte = new Carte54(val, coul);
                    this.cartes.push(nouvelleCarte);
                }
            }
        }
    }

    melanger() {
        for (let i = this.cartes.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let carte = this.cartes.splice(j, 1);
            this.cartes.push(carte.pop());
        }
    }

    tirer() { 
        try {
            return this.cartes.shift ();// pop : dernier
        }
        catch(err) {
            //alert("Il n'y a plus de cartes dans le jeu !");
            return null;
        }
    }

    ajouter(nouvelleCarte) { 
        if (this.cartes.length<=52)
        {
            this.cartes.push(nouvelleCarte);
        }
    }

    afficher(divAffichage) {
        this.cartes.forEach(function (carteAAfficher) {
            carteAAfficher.afficher(divAffichage);
        });
    } 
}

class Paquet extends JeuCartes54 {
    constructor(vide) {
        super(vide);
    }
}