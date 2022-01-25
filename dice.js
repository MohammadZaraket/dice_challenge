window.onload = function(){

var player1 = getRandom();
var player2 = getRandom();
var result = document.querySelector("h1");
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

if(player1 > player2)
{
    result.innerHTML="Player 1 WON, Refresh ME! "

}
else if(player1 < player2)
{
    result.innerHTML="Player 2 WON, Refresh ME! "

}
else 
{
    result.innerHTML="IT is a DRAW, Refresh ME! "
}




 function getRandom()
 {
    return Math.floor(Math.random() * 6) + 1;
 }



 image1.src="images/dice"+player1+".png";
 image2.src="images/dice"+player2+".png";


};