
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.dnd = new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function () {
		if (this.currEditingMode === editingMode.line){
			// on cherche à dessiner un point, c'est pour ça que les x sont égaux entre eux et les y sont égaux entre eux
			this.currentShape = new Ligne(
				this.dnd.xInit,
				this.dnd.yInit,
				this.dnd.xInit,
				this.dnd.yInit,
				this.currColour,
				this.currLineWidth
			);
		} else if (this.currEditingMode === editingMode.rect) {
			// on cherche à dessiner un point, c'est pour ça que la hauteur et la largeur sont nulles
			this.currentShape = new Rectangle(
				this.dnd.xInit,
				this.dnd.yInit,
				0,
				0,
				this.currColour,
				this.currLineWidth
			);
		}
		//on dessine la forme obtenue
		this.currentShape.paint(ctx, canvas);
	}.bind(this);

	this.onInteractionUpdate = function () {
		if (this.currEditingMode === editingMode.line){
			// on dessine la ligne
			this.currentShape = new Ligne(
				this.dnd.xInit,
				this.dnd.yInit,
				this.dnd.xFin,
				this.dnd.yFin,
				this.currColour,
				this.currLineWidth
			);
		} else if (this.currEditingMode === editingMode.rect) {
			// on calcule la hauteur et la largeur en soustrayant respecteviement les X entre eux et les Y entre eux
			this.currentShape = new Rectangle(
				this.dnd.xInit,
				this.dnd.yInit,
				this.dnd.xFin-this.dnd.xInit,
				this.dnd.yFin-this.dnd.yInit,
				this.currColour,
				this.currLineWidth
			);
		}
		//on efface la précédente forme
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx, canvas);
	}.bind(this);

	this.onInteractionEnd = function () {
		if (this.currEditingMode === editingMode.line){
			this.currentShape = new Ligne(
				this.dnd.xInit,
				this.dnd.yInit,
				this.dnd.xFin,
				this.dnd.yFin,
				this.currColour,
				this.currLineWidth
			);
		} else if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(
				this.dnd.xInit,
				this.dnd.yInit,
				this.dnd.xFin-this.dnd.xInit,
				this.dnd.yFin-this.dnd.yInit,
				this.currColour,
				this.currLineWidth);
		}
		//on save la forme qu'on vient de créer
		drawing.addForme(this.currentShape);
		//on clear le canvas de la forme temporaire
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//on ré-initialise le canvas
		drawing.paint(ctx, canvas);
		// on recréé les formes dessus
		drawing.updateFormeList();
		//on ré-initialise la variable currentShape
		this.currentShape = 0;

	}.bind(this);
}


