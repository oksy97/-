var poox=parseInt($('#poo'+1).css('top'))+25;
var pooy=parseInt($('#poo').css('left'))+25;
var persx=parseInt($('#person').css('top'))+50;
var persy=parseInt($('#person').css('left'))+50;
alert(poox);

function crash(poox,pooy,poor,persx,persy,persr){
  var dist=Math.pow((poox-persx),2)+Math.pow((pooy-persy),2);
  var sumr=poor+persr;
  if(dist==sumr){

  }
}
