
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Dessin(){
    this.formes = [];
    this.addForme = function(forme) { this.formes.push(forme);}.bind(this);
    this.removeForme = function(id) { this.formes.splice(id,1); }.bind(this);
}

function Forme(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur =epaisseur;
}

function Rectangle(x, y, largeur, hauteur) {
    Forme.call(this,couleur,epaisseur);
    this.x1 = x1;
    this.y1 = y1;
    this.largeur = largeur;
    this.hauteur = hauteur;
}
Rectangle.prototype = new Forme();

function Ligne(x1, y1, x2, y2) {
    Forme.call(this,color,thickness);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}
Ligne.prototype = new Forme();