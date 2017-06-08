/**
 * Created by Nishant on 6/8/2017.
 */

/*
window.onload = function () {
    var fp = document.getElementById('firstpara');
    console.log(fp);
}
*/

/*
var fp = document.getElementById('firstpara');
console.log(fp)

>>> prints null
*/

// when a function is written inside a dollar in jQuery, this function runs when the browser has loaded.
// $ function is loaded only once HTML has completely loaded

$(function () {
    //var fp = document.getElementById('firstpara');
    $('#firstpara').text("Some other text");
    console.log($('#firstpara'));
    for (i=0;i<1000000000;i++); // delay
    var ngr = $('.nagarro');
    console.log(ngr);

});

// document.querySelectorAll('#firstpara'); // # for id
// document.querySelectorAll('.nagarro'); // # for class

/*
JQuery selectors
 document.querySelectorAll('p + p')
 (2) [p, p]length: 20: p1: p__proto__: NodeListentries: function entries()forEach: function forEach()item: function item()keys: function keys()length: (...)values: function values()constructor: function NodeList()Symbol(Symbol.iterator): function values()Symbol(Symbol.toStringTag): "NodeList"get length: function ()__proto__: Object
 document.querySelectorAll('p ~ p')
 (2) [p, p]length: 20: p1: paccessKey: ""align: ""assignedSlot: nullattributes: NamedNodeMapbaseURI: "http://localhost:63342/Shopping%20Cart/index.html?_ijt=n1jh6lc2ia8h78797ep7hf789m"childElementCount: 0childNodes: NodeList(1)children: HTMLCollection(0)classList: DOMTokenList(0)className: ""clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 855contentEditable: "inherit"dataset: DOMStringMapdir: ""draggable: falsefirstChild: textfirstElementChild: nullhidden: falseid: ""innerHTML: "↵                okok↵            "innerText: "okok"isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: nullnextSibling: textnodeName: "P"nodeType: 1nodeValue: nulloffsetHeight: 18offsetLeft: 8offsetParent: bodyoffsetTop: 84offsetWidth: 855onabort: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonseeked: nullonseeking: nullonselect: nullonselectstart: nullonshow: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullonvolumechange: nullonwaiting: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwheel: nullouterHTML: "<p>↵                okok↵            </p>"outerText: "okok"ownerDocument: documentparentElement: div.nagarroparentNode: div.nagarroprefix: nullpreviousElementSibling: ppreviousSibling: textscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 855shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclarationtabIndex: -1tagName: "P"textContent: "↵                okok↵            "title: ""translate: true__proto__: HTMLParagraphElement__proto__: NodeList
 document.querySelectorAll('div > p') // immediate childs(p) are selected present inside div
 (3) [p#firstpara, p, p]
 document.querySelectorAll('div p') //
 (3) [p#firstpara, p, p]

 // [] represent iterables, for in and of both can be used
 // {} repersent non iterables

 */
