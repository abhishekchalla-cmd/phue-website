const fs = require('fs');
const path = require('path');

let data = {
    nostos: []
};

let counter = 0;

const root = './src/assets/images/nostos';
const res = fs.readdirSync(path.resolve(__dirname, root));

if (!fs.existsSync('./public')) fs.mkdirSync('./public');
if (!fs.existsSync('./public/static')) fs.mkdirSync('./public/static');
if (!fs.existsSync('./public/static/nostos')) fs.mkdirSync('./public/static/nostos');

res.map(item => {
    const route = path.resolve(__dirname, root, item);
    const stats = fs.statSync(route);
    if (stats.isDirectory()) {
        counter++;
        const files = fs.readdirSync(route);
        if (!fs.existsSync('./public/static/nostos/' + item)) fs.mkdirSync('./public/static/nostos/' + item);

        data.nostos.push({
            name: counter,
            files: []
        });

        files.map(file => {
            if (file !== '.DS_Store') {
                data.nostos[data.nostos.length - 1].files.push('nostos/' + counter + '/' + file);
                fs.copyFileSync(route + '/' + file, path.resolve('./public/static/nostos/', item, file));
            }
        })
    }
});

fs.writeFileSync(path.resolve(__dirname, './src/data.json'), JSON.stringify(data, null, 4));