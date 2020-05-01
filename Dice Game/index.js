var randomNumber1 = Math.floor(((Math.random())*6))+1;
document.querySelector(".container .dice .img1").setAttribute("src","C:/Users/Lenovo/Desktop/T/web development/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(((Math.random())*6))+1;
document.querySelector(".container .dice .img2").setAttribute("src","C:/Users/Lenovo/Desktop/T/web development/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png");
if(randomNumber1===randomNumber2){
  document.querySelector(".container h1").innerHTML = "Draw!";
}
else if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else{
  document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
