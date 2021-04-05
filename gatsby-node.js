const fs = require('fs');
const path = require('path');

let data = {
    nostos: []
};
let counter = 0;

const root = './src/assets/images/nostos';
const res = fs.readdirSync(path.resolve(__dirname, root));
res.map(item => {
    const route = path.resolve(__dirname, root, item);
    const stats = fs.statSync(route);
    if (stats.isDirectory()) {
        counter++;
        const files = fs.readdirSync(route);
        data.nostos.push({
            name: counter,
            files: []
        });
        files.map(file => {
            data.nostos[data.nostos.length - 1].files.push('nostos/' + counter + '/' + file);
        })
    }
});

fs.writeFileSync(path.resolve(__dirname, './src/data.json'), JSON.stringify(data, null, 4));