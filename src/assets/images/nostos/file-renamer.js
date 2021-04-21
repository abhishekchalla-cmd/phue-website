const fs = require('fs');
const path = require('path');

const numberFiles = (dirname, index) => {
	let files = fs.readdirSync(dirname);
	let counter = 0;
	files.forEach(filename => {
		const file = fs.statSync(dirname + '/' + filename);
		counter++;
		if (file.isFile()) fs.renameSync(dirname + '/' + filename, dirname + '/' + counter + path.extname(filename));
	})
	fs.renameSync(dirname, index)
}

for (let i = 0; i < 5; i++) numberFiles("Look " + (i + 1), (i + 1) + "");