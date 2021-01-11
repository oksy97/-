var pooCount=10;
var die=0;

function main_routine()
{
   if(isGame==1)
   {
      game_routine();
   }
}

function game_routine(){
  if(!die){
    $(".personImage").attr("src","./img/"+playerStatus+"_"+animationFrame+".png")
    if(playerStatus=="walk"){
      if(animationFrame>=8){
        animationFrame=1;
      }
      else
      animationFrame++;
    }
  }
  $("#person").animate({"left":"+="+speed+"px"},0);
  var x1=parseInt($("#person").css("left"));
  var y1=parseInt($("#person").css("top"));
   for(var x=0;x<pooCount;x++)
   {
     var x2=parseInt($('#poo'+x).css("left"));
     var y2=parseInt($('#poo'+x).css("top"));

     if(collision(x1,y1,x2,y2)&&!die){
       die=1;

     }
     if(die){
       $(".personImage").attr("src","./img/die_"+parseInt(die/10+1)+".png");
       if(die<69) die++;
       else{
         isGame=0;
         score=0;
         for(var y=0;y<pooCount;y++)
            $("#poo"+y).animate({"top":"999px"},0);
        $("#title").css("visibility","visible");
         return;
       }
     }

      var top = parseInt($('#poo'+x).css("top"));
      var bottom = y1+50;
      //console.log(top,bottom);
      if(top>=bottom)
      {
        if(pooarray[x]<10){
            $("#pooImage"+x).attr("src","./img/poo_die.png");
            pooarray[x]++;
        }
        else{
          pooarray[x]=0;
          $("#pooImage"+x).attr("src","./img/poo.png");
         $("#poo"+x).animate({"top": "0px"}, 0 );
         var game_width = $(window).width();
         var game_height = $(window).height();
         $("#poo"+x).animate({"left": Math.random()*game_width}, 0 );
         $("#poo"+x).animate({"top": Math.random()*-game_height}, 0 );
         score++
         $('#scorePanel').html('score:'+score);
       }
      }
      else
      {
         $("#poo"+x).animate({"top": "+=5px"}, 0 );
      }
   }
}

setInterval(main_routine,16);

//
// routine 에서 삼각함수 써야됨 힌트
// 사람에 똥이 부딪히면 멈추는거

// var pooCount=10;
// var isGame=0;
// function main_routine(){
//   if(isGame==1){
//     game_routine();
//   }
// }
// function game_routine(){
//
//   for(var x=0;x<pooCount;x++){
//
//
//
//       var top=perseInt($('#poo'+x).css('top'));
//       var bottom=perseInt($('#person').css('top'))+50;
//       if(top>=bottom){
//         $('#poo'+x).animate({"top":"0px"},0);
//         var game_width=$(window).width();
//         var game_height=$(window).height();
//
//         $('#poo'+x).animate({"left":Math.randome()*game_width},0);
//         $('#poo'+x).animate({"top":Math.randome()*-game_height},0);
//       }
//       else{
//       $('#poo'+x).animate({"top":"+=5px"},0);
//       }
// }
//   // console.log 를 이용해서
//   // console을 누르고 값을 확인해줄 수 있다
//   // document window screen 이렇게 나뉜다.
//
// }
// setInterval(main_routine,16);
//
// // function main_routine(){
// //   var sav=$(window).height();
// //
// //   var savtop=parseInt($('#poo').css('top').replace(/[^-\d\.]/g, ''));
// //
// //
// //   if(sav==savtop){
// //     return 1;
// //   }
// //
// //   $('#poo').animate({
// //     "top":"+=1px"
// //   },-100)
// // }
// //
// // repeat();
// // function repeat(){
// //   var nansoo;
// //
// //   var stop=setInterval(function(){
// //     var s=main_routine();
// //
// //     if(s==1){
// //       clearInterval(stop);
// //       $('#poo').css('top','0px');
// //       nansoo=(parseInt(Math.random()*parseInt($(window).width())));
// //       $('#poo').css('left',nansoo);
// //
// //
// //
// //       if($('#poo').css('top')=='0px'){
// //         repeat();
// //       }
// //     }
// //   },3);
// // }
