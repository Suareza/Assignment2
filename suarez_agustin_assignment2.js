/*
 Agustin Suarez
 January 12, 2011
 Assignment 2
 "Competition"
*/

var toQualify = "Matchup",
    numberOfMatches = 6,
    myChoiceTeams = ["Real Madrid", "Manchester United", "FC Barcelona"],
    OptionB_Money = 75;

// Procedure
console.log("I began to notice with more detail the options for the Tournament:");
var selection = function(First){
        console.log("There are three options to enter the FIFA 12 tournament. " + First + " consists of winning 4 games back to back to qualify to finals.");
        var passOptionA = true;
            if (passOptionA === true){
                console.log("Display: Congratualtions you have earned a spot for the finals!!!")
            } else {
                console.log("Display: Game Over... start all over again.")
            };
};
selection("Option A");

// Boolean Function
var optionB = function (optionB_Money, matches){
      console.log("The second option was Option B. This option cost $" + optionB_Money + " to enter plus you had to win " + matches + " matches back to back to qualify to finals.");
      
      var winThreeGames = true,
          entryFee = OptionB_Money,
          loseOneGame = false,
          passOptionA = true,
          result1,
          optionB_Result;
      
      if (entryFee && winThreeGames || passOptionA) { result1 = "Congratulations you qualify for finals!!"; }
         else { result1 = "Game Over... please choose different options if you wish to continue with Tournament."; }
        optionB_Result = "The display shows: " + result1;
        return optionB_Result;
};
var resultOptionB = optionB(75, 3);
console.log(resultOptionB);
