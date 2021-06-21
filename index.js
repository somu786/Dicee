var randomNum1 = Math.random();
randomNum1 = randomNum1 * 6 ;
randomNum1 = Math.floor(randomNum1) + 1 ;

var randomDiceImage = "dice" + randomNum1 + ".png" ;

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource) ;

/////////////

var randomNum2 = Math.random();
randomNum2 = randomNum2 * 6 ;
randomNum2 = Math.floor(randomNum2) + 1 ;

var randomDiceImage = "dice" + randomNum2 + ".png" ;

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource) ;

////////////////////

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "-Draw-";
}
