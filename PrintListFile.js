const r = require('./ReadDir');

async function printListFile(dir){
	var files = await r.readDir(dir);
	for (var file of files) console.log(file);
}

module.exports.printListFile = printListFile;