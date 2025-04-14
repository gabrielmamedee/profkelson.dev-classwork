const notas = [10.0, 9.5, 4.7];
const mediaDeCorte = 7.0;

console.log(`A primeira nota do alune é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);

var media = ((notas[0] + notas[1] + notas[2]) / notas.length).toFixed(1);

console.log(`A media é: ${media}`);

if (media >= mediaDeCorte) {
    console.log("APROVADO");
} else {
    console.log("REPROVADO");
}

var statusAprovacao = media >= mediaDeCorte ?  "APROVADO" : "REPROVADO";
console.log(statusAprovacao);
