const PATH_DATA = '../../data/member.json';
const fs = require('fs').promises;
const path = require('path');
const { copyRecursive, removeFile } = require('./copyFile');

async function readFileJsonAsync() {
    try {
        const contentFile = await fs.readFile(path.resolve(__dirname, PATH_DATA));
        const dataMembers = JSON.parse(contentFile);
        return dataMembers;
    } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

async function writeFileAsync(newMember) {
    try {
        const oldMembers = await readFileJsonAsync();
        const allMembers = JSON.stringify([...oldMembers, { register: Date.now(), ...newMember }]);
        await fs.writeFile(path
            .resolve(__dirname, PATH_DATA), allMembers);
        removeFile();
        copyRecursive();
    } catch (err) {
        console.error(`Erro ao escrever o arquivo: ${err.message}`);
    }
}

module.exports = {
    readFileJsonAsync,
    writeFileAsync,
};
