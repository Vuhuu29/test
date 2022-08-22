const fs = require('fs').promises;
const path = require('path');

async function readDir(dir) {
    let files = await fs.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) return null;
        else if(stats.isFile()) return file;
    }));
	var f = [];
	for(var file of files) if (file != null) f.push(file);
    return f;
}

module.exports.readDir = readDir;