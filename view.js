
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    Shape.test.paint.call(this, ctx);
    ctx.rect(this.x, this.y, this.hauteur, this.largeur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
    Shape.test.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};


Dessin.prototype.paint = function(ctx) {
    console.log(this.formes);
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function (element) {
        element.paint(ctx);
    });
};
