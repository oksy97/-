var isGame=0;
var score=0;
var playerStatus="idle";
var animationFrame=1;
var speed=0;
$('#left').mousedown(leftCallback);
function leftCallback(){
  if(isGame==0){
    $("#title").css("visibility","hidden");
    isGame=1;
    die=0;
  }
  playerStatus="walk";
  speed=-3;
  $(".personImage").css("transform","scaleX(-1)");
}
function rightCallback(){
  if(isGame==0){
    $("#title").css("visibility","hidden");
    isGame=1;
    die=0;
  }
  playerStatus="walk";
  speed=3;
  $(".personImage").css("transform","scaleX(1)");
}
$(document).keydown(keydownCallback);
function keydownCallback(event){
  if(isGame==0){
    $("#title").css("visibility","hidden");
    isGame=1;
    die=0;
  }
  playerStatus="walk";
  if(event.which==39){
    // $('#person').animate({"left":"+=5px"},0);
    speed=5;
    $(".personImage").css("transform","scaleY(1)");
}
if(event.which==37){
// $('#person').animate({"left":"-=5px"},0);
    speed=-5;
    $(".personImage").css("transform","scaleY(-1)");
}
}
$(document).keyup(keyupCallback);
function keyupCallback(event){
  playerStatus="idle";
  animationFrame=1;
  speed=0;
}

function collision(x1,y1,x2,y2){
  var dx=Math.pow(x1-x2,2);
  var dy=Math.pow(y1-y2,2);
  var dist=Math.sqrt(dx+dy); //제곱근 구하는거

  if(dist<50) return true;
  else return false;

}
