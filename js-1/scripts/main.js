



alert("Todos estan Muertos");




var weapon = prompt("Mira, un almacen, al parecer solo hay un hacha y una pistola, rapido toma un objeto");

var randomNumber = Math.round(Math.random());

alert("Un Zombie salvaje aparece, rapido utiliza tu " + " " + weapon);

if(randomNumber === 0 ){
  alert("The zombie bites you.  You lose!!!");
} else if (randomNumber === 1 ){
  alert("You kill the zombie with your" + " " + weapon + ". You win!");
}
