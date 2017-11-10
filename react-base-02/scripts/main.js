

var menu;
var bandera = 0;
var estado = 'vivo';

function Saluda(nombre){

	alert("Hola " + nombre);
}


do {

	 menu = prompt("Menu: \n 1- Jugar  \n 2- Salir");

	 nombre = prompt("Cual es tu Nombre?");

	 Saluda(nombre);

	if (menu === '1') {

var Arma = prompt("Mira, un almacen, al parecer solo hay un hacha y una pistola, rapido toma un objeto");
var numeroAlazar = Math.round(Math.random());


alert("Un Zombie salvaje aparece, rapido utiliza tu " + " " + Arma);
if(numeroAlazar === 0 ){
  
  alert("Tu "+ Arma + " fallo y el Zombie te hizo suyo. Perdiste!!!");
  estado = 'muerto';

} else if (numeroAlazar === 1 ){
  alert("Perfecto le haz dado un golpe critico con tu " + " " + Arma + ". Sigues Vivo!!");
  estado = 'vivo';
}


	bandera = 1;

} else if (menu === '2') {


	 alert("Adios.");
	 bandera = 1;
}

else {
 alert("Favor ingresar una opcion valida.");
}




} while (bandera === 0);





