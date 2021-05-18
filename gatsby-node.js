const fs = require('fs');
const path = require('path');

let data = {};

let counter = 0;

const root = './src/assets/images/nostos';
const res = fs.readdirSync(path.resolve(__dirname, root));

if (!fs.existsSync('./public')) fs.mkdirSync('./public');
if (!fs.existsSync('./public/static')) fs.mkdirSync('./public/static');
if (!fs.existsSync('./public/static/nostos')) fs.mkdirSync('./public/static/nostos');

data.nostos = [];
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

data.news = [
    {
        title: 'Image 1',
        subtitle: 'Lorem ipsum dolor sit amet consectus',
        link: '#',
        coverImage: 'https://cocainemodels.com/wp-content/uploads/2019/03/modelagentur-geld-bezahlen-verdienen-tipps-geheim-kosten-serioes-1030x472.jpg'
    },
    {
        title: 'Image 2',
        subtitle: 'Lorem ipsum dolor sit amet consectus',
        link: '#',
        coverImage: 'https://www.thenationalnews.com/image/policy:1.719414:1552558388/shudu.jpg?f=16x9&w=1200&$p$f$w=ea78e20'
    },
    {
        title: 'Image 3',
        subtitle: 'Lorem ipsum dolor sit amet consectus',
        link: '#',
        coverImage: 'https://d194ip2226q57d.cloudfront.net/images/Hair-Trends_Averie-Woodard.original.jpg'
    }
];


fs.writeFileSync(path.resolve(__dirname, './src/data.json'), JSON.stringify(data, null, 4));