const carreira = "Desenvolvedor FullStack"
const carreira2 = "Desenvolvedor Back-End"

function objetivoDeCarreira(nomeDaCarreira) {
    return `Meu objetivo decarreira é me tornar um ${nomeDaCarreira}`;
}

const objetivoDeCarreira2 = (nomeDaCarreira) => {
    `Meu objetivo decarreira é me tornar um ${nomeDaCarreira}`;
}

console.log(objetivoDeCarreira(carreira));
console.log(objetivoDeCarreira2(carreira2));