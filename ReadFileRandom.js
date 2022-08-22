const fs = require('fs').promises;
const path = require('path');
const r = require('./ReadDir');

async function readFileRandom(dir){
		var files = await r.readDir(dir);
		if (files.length === 0) console.log('Khong co file trong thu muc cha');
		else {
			var file = files[Math.floor(Math.random() * files.length)];
			var data = await fs.readFile(path.join(dir, file));
			console.log(file + ':');
			console.log(data.toString());
		}
}

module.exports.readFileRandom = readFileRandom;