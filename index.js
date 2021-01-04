function rollDice(){


    var randomNumberOne = Math.ceil(Math.random() * 6);
    var randomNumberTwo = Math.ceil(Math.random() * 6);

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumberOne + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumberTwo + ".png");

  if (randomNumberOne > randomNumberTwo){
    document.querySelector("h1").textContent = "Player One Wins!!!"
  }
  else if(randomNumberOne < randomNumberTwo){
    document.querySelector("h1").textContent = "Player Two Wins!!!"
  }
  else{
    document.querySelector("h1").textContent = "Refresh Again!!!"
  }

}
