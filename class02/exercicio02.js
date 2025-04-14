const tecnologia = "React";
const tecnologia2 = "Spring"

function objetivoDoCurso(nomeDaTecnologia) {
    return `Meu objetivo é aprender ${nomeDaTecnologia}`;
}

const objetivoDoCurso2 = (nomeDaTecnologia) => {
    return `Meu objetivo é aprender ${nomeDaTecnologia}`;
}

console.log(objetivoDoCurso(tecnologia));
console.log(objetivoDoCurso2(tecnologia2));