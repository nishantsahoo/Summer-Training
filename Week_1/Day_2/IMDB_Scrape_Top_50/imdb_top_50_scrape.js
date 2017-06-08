var listDetail = document.getElementsByClassName('list detail')[0]
for(var i=0;i<listDetail.children.length;i++) {
	var name = listDetail.children[i].children[2].children[0].children[0].innerText
	console.log((i+1) + ' ' + name);
}
/*
Link: http://www.imdb.com/list/ls055386972/
Better solution
var info = document.getElementsByClassName('info')
for (i=0;i<50;i++) { console.log((i+1) + '. ' + info[i].getElementsByTagName('b')[0].innerText); }
*/

/* Hidden code
var _0xbae3=["\x69\x6E\x66\x6F","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x43\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x2E\x20","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x62","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x6C\x6F\x67"];var info=document[_0xbae3[1]](_0xbae3[0]);for(i= 0;i< 50;i++){console[_0xbae3[6]]((i+ 1)+ _0xbae3[2]+ info[i][_0xbae3[5]](_0xbae3[4])[0][_0xbae3[3]])}
*/

/* Jquery code 
for (i=0;i<50;i++) { console.log((i+1) + '. '  + $('* .info b > a')[i].innerText); }
*/