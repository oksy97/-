// var pooarray=[];
//
// for(var x=0;x<pooCount;x++){
//   var poo=$('<div id="poo'+x+'" class="poo"><img src="img/pooo.png" class="pooImage"/></div>');
//   // 이렇게 하면 객체로 위에 것들을 넘겨줌
//   $('body').append(poo);
//
// }
var pooarray = [];
for(var x=0;x<pooCount;x++)
{
   var poo = $('<div id="poo'+x+'" class="poo"><img id="pooImage'+x+'" src="./img/poo.png" class="pooImage"></div>');
   $('body').append(poo);
   pooarray[x]=0;
}

$("#left").mousedown(leftCallback);
$("#right").mousedown(rightCallback);
$("#left").mouseup(keyupCallback);
$("#right").mouseup(keyupCallback);

$("#left").on("touchstart",leftCallback);
$("#right").on("touchstart",rightCallback);
$("#left").on("touchand",keyupCallback);
$("#right").on("touchand",keyupCallback);
