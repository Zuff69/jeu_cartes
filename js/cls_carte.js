class Carte {
  
    constructor(valeur, couleur){
        this.valeur = valeur;
        this.couleur = couleur;
        this.visible = false;
        //privateProps(this, { valeur: valeur, couleur: couleur, visible: false });
    }

/*
    get valeur() {
        return this.valeur;
    }

    get couleur() {
        return this.couleur;
    }

    get visible()
    {
        return this.visible;
    }
    set visible(visible) {
        this.visible = visible;
    }
*/

}


class Carte54 extends Carte {

    constructor(valeur, couleur) {
        super(valeur, couleur);
    }

    ajouterElement(texteAAfficher, divAffichage) {
        let newDiv = document.createElement("div");
        let newContent = document.createTextNode(texteAAfficher);
        newDiv.appendChild(newContent);
        let currentDiv = document.getElementById(divAffichage);
        currentDiv.appendChild(newDiv);

    }

    afficher(divAffichage) {
        let valeurs = [null, null, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Valet", "Dame", "Roi", "As"];
        let couleurs = ["Coeur", "Carreau", "Trefle", "Pique"];
        let getMessage = () => `${valeurs[this.valeur]} de ${couleurs[this.couleur]}`;
        this.ajouterElement(getMessage(), divAffichage);
    }
}

