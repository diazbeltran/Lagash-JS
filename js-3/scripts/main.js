'use strict';

function Persona(nombre, actividad){

	this.nombre = nombre;
	this.actividad = actividad;
	this.vida =  100; 
	this.estado = function () {
		if (this.vida < 0){return false;}
		else { return true;}
	}

	}

function Zombie(){

	this.vida = 10;

	this.estado = function () {
		if (this.vida < 0){ return false;}
		else{ return true;}
	}
}

function numeroRandom(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var estado = 'ataque';
var opcion = 'ok';
var daño;
var nombre = prompt("Hola Joven \n ¿Cual es tu nombre?");
var profesion = prompt(nombre + " ¿Cual era tu profesion antes del Apocalipsis?");
var humano = new Persona(nombre,profesion);

var z1 = new Zombie();


alert("Un Zombie salvaje aparece y te quiere atacar rapido escoje");

do{

	var accion = prompt("1.- Patear \n 2.- Correr \n 3.- Gritar");

switch(accion) {
	
    case '1':
    	alert("Eleccion algo arriesgada, pero afecta al Zombie");
        daño = numeroRandom(0,10);
        z1.vida = z1.vida - daño;
		daño = numeroRandom(0,100);        
		humano.vida = humano.vida - daño;
        break;

    case '2':    	
    	alert("No es muy efectivo, te cansas y el zombie logra darte caza.");
    	daño = numeroRandom(0,2);
        z1.vida = z1.vida - daño;
        daño = numeroRandom(0,100);
        humano.vida = humano.vida - daño;
        break;

    case '3':
        alert("Alientas al Zombie a intentar Morderte.");
        daño = numeroRandom(0,100);
        humano.vida = humano.vida - daño;
        break;

    default:
        alert("ingresa una opcion valida");
        opcion = 'nok';
}
	
	if (opcion === 'ok')
	{
		
		if(humano.estado()){
			alert("El Zombie te ha dejado con: "+ humano.vida +' de vida.');
		}else{
			estado = 'muerto';
		}

		if(z1.estado()){
			alert("haz dejado al Zombie con: "+ z1.vida + " de vida." );
		}
		else {

			alert("Haz matado al zombie");
			estado = 'vencedor';	
		}
	}
	opcion = 'ok';
}while(estado ==='ataque');

if(humano.estado()){
	alert("haz sobrevivido");
}
else{
alert("R.I.P \n Aqui descanzan los restos de " + humano.nombre + " Un Gran "+ humano.actividad );	
}


