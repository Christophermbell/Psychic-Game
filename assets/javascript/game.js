//JavaScript 

var $ = function (id){
  return document.getElementById(id);
}

//array

  var game = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var compChoice = Math.floor(Math.random()*26);
  var answer = game[compChoice];
  var myLength = answer.length;
  var display =[myLength];
  var letters = answer.split('');
  var attemptsLeft = 9;
  var output = "";
  var userLetter = "";



var setup = function()
{
  for(var i=0; i< answer.length; i++)
  {
      display[i] = "_ ";
      output = output + display[i];
  }
  document.getElementById("game").innerHTML = output;
  output = "";

}

window.onload = function()
{
  setup()
}


}
document.getElementById("game").innerHTML = output;
output="";
attemptsLeft--;

if (win < 1)
{
    document.getElementById("Guesses").innerHTML = "You Win!";

  }
  else if (attemptsLeft < 1)
  {
      document.getElementById("Guesses").innerHTML = "You Lose!";
  }
  else
  {
      document.getElementById("Guesses").innerHTML= "You have " + attemptsLeft + "Guesses left";
    }

}



///////////////////

  var computerGuess;


  function newGame() {
    window.location.reload
  }

  function init() {
    computerGuess= 
  }











