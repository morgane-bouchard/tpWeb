
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Dessin(){
    this.formes = [];
    this.ajouterForme = function(forme) { this.formes.push(forme);}.bind(this);
    this.supprimerForme = function(id) { this.formes.splice(id,1); }.bind(this);
}

function Forme(couleur, epaisseur){
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Ligne(x1, y1, x2, y2, couleur, epaisseur){
    Forme.call(this,couleur,epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Ligne.prototype = new Forme();

function Rectangle(x1,y1,largeur,hauteur,couleur,epaisseur){
    Forme.call(this,couleur,epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.hauteur = hauteur;
    this.epaisseur = largeur;
}
Rectangle.prototype = new Forme();
