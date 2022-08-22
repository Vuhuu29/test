const fs = require('fs').promises;
const path = require('path');
const plf = require('./PrintListFile');
const rfr = require('./ReadFileRandom');

async function main() {
	if (process.argv[2] != null) {
		var a = process.argv[2];
		if (a===parseInt(a) || a > 0) {
			var b = 0;
			for(var i = 2;i <= Math.sqrt(a);i++)
				if(a % i == 0) {b = 1; break;}
			if(a == 1) b = 1;
			if(b == 0) {
				plf.printListFile(process.cwd());
			}else {
				var p = path.dirname(process.cwd());
				rfr.readFileRandom(p);
			}
		}else console.log('Tham so phai la so duong');
		
	}
	else console.log('Chua nhap tham so');
}

main();