function rollDice(){


    var randomNumberOne = Math.ceil(Math.random() * 3);
    var randomNumberTwo = Math.ceil(Math.random() * 3);
    var randomNumberThree = Math.ceil(Math.random() * 3);

  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumberOne + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumberTwo + ".png");
  document.querySelector(".img3").setAttribute("src", "images/dice" + randomNumberThree + ".png");


  if (randomNumberOne === randomNumberTwo && randomNumberTwo === randomNumberThree){
    document.querySelector("h1").textContent = "Hulyo Manlaban Kana"
  }

  else{
    document.querySelector("h1").textContent = "Try lang ng Try!!!";

      var y = document.querySelector("#life").getAttribute("value");

      if (y <= 0){
          document.querySelector("h1").textContent = "wala ka ng buhay Shunga";
          document.querySelector("#buhay").style.visibility = "hidden";

      }
      else{
      document.querySelector("#life").setAttribute("value", y - 1);
    }

  }

}
function reset(){

  document.querySelector("#buhay").style.visibility = "visible";
  document.querySelector("#life").setAttribute("value", 5);
}
