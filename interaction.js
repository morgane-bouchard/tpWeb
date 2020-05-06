
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
	this.xInit = 0;
	this.yInit = 0;
	this.xFin = 0;
	this.yFin = 0;
	this.isClicked = false;
	this.position;
	// Developper les 3 fonctions gérant les événements
	this.clikMouse = function(evt) {
		interactor.onInteractionStart(this);
		position = getMousePosition(canvas, evt);
		xInit = xFin = position.x;
		yInit = yFin = position.y;
		isClicked = true;
		console.log(xInit + ";" + yInit);
	}.bind(this);

	this.moveMouse = function(evt) {
		if (isClicked) {
			interactor.onInteractionUpdate(this);
			position = getMousePosition(canvas, evt);
			xFin = position.x;
			yFin = position.y;
			console.log(xFin + ";" + yFin);
		}
	}.bind(this);

	this.declickMouse = function(evt) {
		if (isClicked) {
			interactor.onInteractionEnd(this);
			position = getMousePosition(canvas, evt);
			isClicked = false;
			console.log(position.x +";"+ position.y);
		}
	}.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
	canvas.addEventListener('clickMouse', this.clickMouse, false);
	canvas.addEventListener('moveMouse', this.moveMouse, false);
	canvas.addEventListener('declickMouse', this.declickMouse, false);
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}



