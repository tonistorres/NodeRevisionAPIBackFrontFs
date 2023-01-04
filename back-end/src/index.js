const readLine = require('readline-sync');
const { writeFileAsync } = require('./utils/fsUtils');

async function Escrever() {
    const name = readLine.question('Digite seu nome Completo-->>');
    const baptism = readLine.question('Digite sua Data de Batismo--> ');
    const birth = readLine.question('Digite sua Data de Nascimento-->>');
    const country = readLine.question('Digite o seu pais que Reside-->>');
    const state = readLine.question('Digite o seu estado que Reside-->>');
    const city = readLine.question('Digite sua cidade que Reside-->>');
    const district = readLine.question('Digite seu Bairro -->');
    const mother = readLine.question('Digite o nome da sua Mae-->>');
    const dad = readLine.question('Digite o nome seu Pai-->>');
    const status = readLine.question('Digite seu Estado Civil-->>');
    const newMember = { name, baptism, birth, country, state, city, district, mother, dad, status };
    writeFileAsync(newMember);
}

Escrever();
