class cls_jeu_cartes {

    constructor(vide) {
        //if (new.target === cls_jeu_cartes) {
        //    throw new TypeError("Cannot construct Abstract instances directly");
        //}
        if (this.constructor === cls_jeu_cartes) {
            throw new TypeError('Abstract class "Widget" cannot be instantiated directly.');
        }
        this.cartes = [];
        if (!vide) {
            for (let val = 2; val < 15; val++) {
                for (let coul = 0; coul < 4; coul++) {
                    let nouvelleCarte = new Carte(val, coul);
                    this.cartes.push(nouvelleCarte);
                }
            }
        }
    }

    melanger() { 
        for(let j, x, i = this.cartes.length; i; j = Math.floor(Math.random() * i), x = this.cartes[--i], this.cartes[i] = this.cartes[j], this.cartes[j] = x);
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
        for (let i = 0; i < this.cartes.length; i++) { 
            var carteAAfficher = this.cartes[i];
            carteAAfficher.afficher(divAffichage); 
        }
    } 
}

//function paquet() 
//{ 
//	  jeuCartes.apply(this, arguments);
//}

class cls_paquet extends cls_jeu_cartes {
    constructor(vide) {
        super(vide);
    }
}