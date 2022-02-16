/*!
* Start Bootstrap - Heroic Features v5.0.4 (https://startbootstrap.com/template/heroic-features)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-heroic-features/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var divArray = [];
var x = document.getElementById('main')
var xchild = document.getElementById('main').children

var list = document.getElementById('main').childNodes;
function refresh(){
        while (list.firstChild) {
            list.removeChild(myNode.firstChild);
    }
}
function savearray(){
    for (var i = 0; i < list.length ; i += 1) {
        //divArray.push();
        divArray.push(list[i]);
        console.log(list[i]);
}
}
function append(){
    for (var i = 0; i < divArray.length ; i += 1) {
        x.appendChild(divArray[i]);
        }
}
function pushcommand(){


}
function updatearray(){
        for (var i = 0; i < list.length-1 ; i += 1) {
            var deb = document.getElementById('debug')
            divArray.push(list[i]);
            deb.appendChild(list[i+1]);
           console.log( Array.from(getindex.parentNode.children).indexOf(getindex[i]))
        }
    } 
function loopoverdiv(){
    var x = document.getElementById('main').childNodes;
    var y = document.getElementById('main')
    x.forEach(childNodes => {
        var htmlstr = Array.prototype.reduce.call(childNodes, function(html, node) {
            return html + ( node.outerHTML || node.nodeValue );
        }, "");
        divArray.push(htmlstr);
        console.log(htmlstr)
    });
    
}
if (divArray.length === 0){
savearray();}
console.log(divArray);
$(".black").click(function() {
    append();
});  
$(".index-class").click(function() {
    $(".index-class").mouseover(function() {
        $(this).fadeIn("slow", function() {
    }); 
    });
    $(this).toggle("slow", function() {
    this.remove();
});  
});

