$(document).on('ready', function() {
  var turn = 0;

  var self = $(this);


  $('td').on('click', function() {

    if (turn % 2 === 0) {
      $(this).html('<img style="width:150px;"src="http://www.officialpsds.com/images/thumbs/Disco-Ball-psd37925.png"/>').addClass('o');
    } else {
      $(this).html('<img style="width:80px;"src="http://images1.wikia.nocookie.net/__cb20130904075842/simpsons/images/f/f7/Disco_Stu.png"/>').addClass('x');
    }

    $(this).off('click');

    checkForWinner();

    turn++;

  });



  function checkForWinner() {
      var xBox = $('.x');
      var oBox = $('.o');

      for (var i = 0; i < xBox.length; i++) {
        for (var j = i + 1; j < xBox.length; j++) {
          for (var k = j + 1; k < xBox.length; k++) {
            if (parseInt(xBox[i].id) + parseInt(xBox[j].id) + parseInt(xBox[k].id) === 15) {
              alert("DISCO STEW OH YEAH");
              resetGame();
            }
          }
        }
      }
      for (var i = 0; i < oBox.length; i++) {
        for (var j = i+1; j < oBox.length; j++) {
          for (var k = j+1; k < oBox.length; k++) {
            if (parseInt(oBox[i].id) + parseInt(oBox[j].id) + parseInt(oBox[k].id) === 15) {
              alert("THE DISCOBALL WINS, GROOVVVY ");
              resetGame();
            }
          }
        }
      }
    }

    function resetGame() {
        location.reload();

    }


  var backgroundInterval = setInterval(function(){
    $("#2").toggleClass("background1");
 },1000)
 var backgroundInterval = setInterval(function(){
   $("#7").toggleClass("background2");
},1500)
var backgroundInterval = setInterval(function(){
  $("#6").toggleClass("background3");
},1000)
var backgroundInterval = setInterval(function(){
  $("#9").toggleClass("background4");
},1500)
var backgroundInterval = setInterval(function(){
  $("#5").toggleClass("background5");
},1000)
var backgroundInterval = setInterval(function(){
  $("#1").toggleClass("background6");
},1500)
var backgroundInterval = setInterval(function(){
  $("#4").toggleClass("background7");
},1000)

var backgroundInterval = setInterval(function(){
  $("#3").toggleClass("background8");
},1500)
var backgroundInterval = setInterval(function(){
  $("#8").toggleClass("background9");
},1000)

  $("#character1").fadeIn(7000);
  $("#character2").fadeIn(5000);
  $(".board").fadeIn(3000);




});
