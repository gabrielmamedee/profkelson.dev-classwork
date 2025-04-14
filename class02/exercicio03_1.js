const temperaturas = [25, 30, 15, 20];

console.log(`As temperaturas armazenadas são: ${temperaturas}`);

const tempAleatoria = temperaturas[Math.floor(Math.random()*temperaturas.length)];

var tempFahrenheit = (tempAleatoria*9/5)+32;

console.log(`A temperatura sorteada é ${tempAleatoria}ºC, que corresponde a ${tempFahrenheit}ºF`);