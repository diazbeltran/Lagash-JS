



alert("Todos estan Muertos");




var Arma = prompt("Mira, un almacen, al parecer solo hay un hacha y una pistola, rapido toma un objeto");

var numeroAlazar = Math.round(Math.random());

alert("Un Zombie salvaje aparece, rapido utiliza tu " + " " + Arma);

if(numeroAlazar === 0 ){
  alert("Tu "+ Arma + " fallo y el Zombie te hizo suyo. Perdiste!!!");
} else if (numeroAlazar === 1 ){
  alert("Perfecto que le haz dado un critico con tu " + " " + Arma + ". Sigues Vivo!!");
}
