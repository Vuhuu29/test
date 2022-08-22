var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var arr = [
"https://portswigger.net/web-security/learning-path", "https://stackoverflow.com/questions/52995347/getting-html-source-code-via-xmlhttprequest-javascript", 
"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open", 
"http://trungtt.com/2022/thiet-ke-tham-khao-giao-dien-ung-dung-tao-de-thi/", 
"https://www.taigame.mobi/top-game-gba-hay-nhat/"];

var tle = ["", "", "", "", ""];
var bo = [0, 0, 0, 0, 0];

async function getTitle(url, i){
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() { 
 		if (xhr.readyState == 4 && xhr.status == 200) {
    			var title = (/<title>(.*?)<\/title>/m).exec(xhr.responseText);
			//console.log(title[1]);
			if (title != null) tle[i] =  title[1];
			else tle[i] = "Website không có title";
			bo[i] = 1;
  		}
	}
	xhr.onerror = event => {tle[i] = "Lỗi khi tải website"; bo[i] = 1;}
	xhr.send();
}

function loop(){
	if(bo[0] && bo[1] && bo[2] && bo[3] && bo[4]) 
		for(var i = 0;i < 5; i++) console.log(tle[i]);
	else setTimeout( loop, 5000 );
}

for(var i = 0;i < 5;i++) {getTitle(arr[i], i);}
loop();


