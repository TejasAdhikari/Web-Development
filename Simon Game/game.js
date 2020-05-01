var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var n=0;
var count = 0;
var index=0;
function nextSequence(){
  userClickedPattern = [];
  var randomNumber = Math.floor((Math.random())*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  n++;
  $("#level-title").text("Level "+ n);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");
   setTimeout(function () {
     $("#"+currentColour).removeClass("pressed");
   }, 100);
 }

document.addEventListener("keypress", function(event){
  count++;
  if(count === 1){
  //  started = True;
    nextSequence();
  }
});

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
    if(gamePattern.length===userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200)
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
    console.log("wrong");
  }
}
function startOver(){
  gamePattern=[];
  count=0;
  n=0;
}
