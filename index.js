//for dice1
var randomnumber1 = Math.floor(Math.random()*6)+1;  //1 to 6
var randomDiceImage1 = "dice"+randomnumber1+".png" // dice1 to dice6
var randomSource1 = "images/" + randomDiceImage1 // image/dice1.png

//for Dice2
var randomnumber2 = Math.floor(Math.random()*6)+1;  //1 to 6
var randomDiceImage2 = "dice"+randomnumber2+".png" // dice1 to dice6
var randomSource2 = "images/" + randomDiceImage2 // image/dice1.png

//actual work
document.querySelectorAll("img")[0].setAttribute("src",randomSource1);
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomnumber1>randomnumber2)
    document.querySelector("h2").innerHTML="player 1 wins";
else if(randomnumber1<randomnumber2)
    document.querySelector("h2").innerHTML="player 2 wins";
else 
    document.querySelector("h2").innerHTML="Draw!";
