//DICE 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
/*so that the random number is between 1 and 6 and ginamit ko
math.floor to round down the number kasi ang ilalabas ng math.random ay decimal
then may plus 1 para ang lowest number ay 1 instead of 0
*/
console.log(randomNumber1); //pang testing lang to see the random number in console
var randomDiceImage = "dice" + randomNumber1 + ".png"; //so this is a string from dice1.png to dice6.png using concatenation 
var randomImageSource = "images/" + randomDiceImage; //from imgaes/dice1.png to images/dice6.png
/*dinagdag ko yung "dice" and ".png" para maging valid path siya
then ginamit ko yung document.querySelector to select the image element with class img1
then ginamit ko yung setAttribute to change the src attribute of the image element to the random dice image path
*/
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//DICE 2:
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
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