
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xDebut = 0;
	this.yDebut = 0;
	this.xFin = 0;
	this.yFin = 0;
	var isPressed = false;
	// Developper les 3 fonctions gérant les événements
	this.pression = function(evt){
		isPressed = true;
		var position = getMousePosition(canvas,evt);
		this.xDebut =this. xFin = position.x;
		this.yDebut = this.yFin = position.y;
		interactor.onInteractionStart(this);
	}.bind(this);
	this.deplacement = function(evt){
		if(isPressed){
			var position = getMousePosition(canvas,evt);
			this.xFin = position.x;
			this.yFin = position.y;
			interactor.onInteractionUpdate(this);
		}

	}.bind(this);
	this.relacher = function(evt){
		if(isPressed){
			interactor.onInteractionEnd(this);
			isPressed = false;
		}

	}.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('mousedown', this.pression, false);
	canvas.addEventListener('mousemove', this.deplacement, false);
	canvas.addEventListener('mouseup', this.relacher, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}



