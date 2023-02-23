
function colorea(elemento, color) {
	elemento.style.backgroundColor = color;
}

function aleatorio(maximo){
	return Math.floor(Math.random()*(maximo+1));
}

function generarColor() {
	return 'rgb('+ aleatorio(255)+','+aleatorio(255)+','+aleatorio(255)+')';
}

