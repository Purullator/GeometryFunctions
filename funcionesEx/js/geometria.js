
function minimo(a, b) {
	return a<b ? a : b;
}

function areaTriangulo (base, altura){
	return base*altura/2;
}

function areaRectangulo (base, altura){
	return base*altura;
}

function descuento(precio, discount){

	if (precio < 0 || discount < 0 || discount > 100){
		return NaN;
	} else {
		return precio - (discount/100)*precio;
		
	}

}

function esPrimo(num){

	for (i=2; i<num; i++) {

		if(num%i===0){

			return 'No es un número primo.';
		}
	}

	if (num === 1) {
		return 'Has introducido el numero 1, no es un numero primo ';
	} else {
		return 'El numero ingresado es un numero primo';
	}
}

function escalar(imagen, escala){
	imagen.width *= escala;
}

