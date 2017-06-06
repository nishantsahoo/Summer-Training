var listDetail = document.getElementsByClassName('list detail')[0]
for(var i=0;i<listDetail.children.length;i++) {
	var name = listDetail.children[i].children[2].children[0].children[0].innerText
	console.log((i+1) + ' ' + name);
}
/*
var info = document.getElementsByClassName('info')
for (i=0;i<50;i++) { console.log((i+1) + '. ' + info[i].getElementsByTagName('b')[0].innerText); }
*/