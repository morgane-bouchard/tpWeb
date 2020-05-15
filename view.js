
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
};
Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.rect(this.x1, this.y1, this.epaisseur, this.hauteur);
    ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
};

Dessin.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.formes.forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Dessin.prototype.updateShapeList = function(){
    var shapeList = document.getElementById('shapeList');
    var li = document.createElement('li');
    var button = document.createElement('button');
    var span = document.createElement('span');

    li.setAttribute('class', 'list-group-item');
    button.setAttribute('class', 'btn btn-default');
    span.setAttribute('class','glyphicon glyphicon-remove-sign');

    var id = this.formes.length-1;
    li.setAttribute('id', 'shape_'+id);
    button.setAttribute('id', 'button_'+id);
    button.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    var shape = this.formes[id];

    button.appendChild(span);
    li.appendChild(button);

    if(shape instanceof Rectangle)
        li.appendChild(document.createTextNode(' Rectangle (' + (shape.x1 | 0) +',' + (shape.y1 | 0) + ',' + shape.epaisseur + ',' + shape.hauteur + ')'));
    else if(shape instanceof Ligne)
        li.appendChild(document.createTextNode(' Line (' + (shape.x1 | 0) +',' + (shape.y1 | 0) + ',' + (shape.y2 | 0) + ',' + (shape.y2 | 0) + ')'));

    shapeList.appendChild(li);
};

Dessin.prototype.deleteShape = function(id){
    var li = document.getElementById('shape_'+id);
    var index = (li).index();
    li.remove();
    this.supprimerForme(index);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.paint(ctx, canvas);
};
