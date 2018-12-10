class clsJeuCartes54 {

    constructor(vide) {
        this.cartes = [];
        if (!vide) {
            for (let val = 2; val < 15; val++) {
                for (let coul = 0; coul < 4; coul++) {
                    let nouvelleCarte = new clsCarte54(val, coul);
                    this.cartes.push(nouvelleCarte);
                }
            }
        }
    }

    melanger() {
        this.shuffle(this.cartes);
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
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

class clsPaquet extends clsJeuCartes54 {
    constructor(vide) {
        super(vide);
    }
}