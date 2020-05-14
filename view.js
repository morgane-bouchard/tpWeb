
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

Dessin.prototype.updateFormeList = function(){
    const shapeList = document.getElementById('shapeList');
    const list = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    list.setAttribute('class', 'list-group-item');
    button.setAttribute('class', 'btn btn-default');
    span.setAttribute('class','glyphicon glyphicon-remove-sign');

    const id = this.formes.length - 1;
    list.setAttribute('id', 'shape_'+id);
    button.setAttribute('id', 'button_'+id);
    button.setAttribute('onClick', 'drawing.deleteShape('+id+')');
    const forme = this.formes[id];

    button.appendChild(span);
    list.appendChild(button);

    if(forme instanceof Rectangle)
        list.appendChild(document.createTextNode(' Rectangle (' + (forme.x | 0) +',' + (forme.y | 0) + ',' + forme.largeur + ',' + forme.hauteur + ')'));
    else if(forme instanceof Ligne)
        list.appendChild(document.createTextNode(' Line (' + (forme.x1 | 0) +',' + (forme.y1 | 0) + ',' + (forme.y2 | 0) + ',' + (forme.y2 | 0) + ')'));

    shapeList.appendChild(list);
};
