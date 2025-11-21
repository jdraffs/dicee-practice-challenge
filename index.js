//MY REFACTORED CODE SEE INDEX1.JS FOR THE ORIGINAL CODE AND COMMENTS:
//DICE 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //from imgaes/dice1.png to images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//DICE 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

//DECIDING THE WINNER:
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = 'Player 2 Wins!';
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


