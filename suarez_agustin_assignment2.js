/*
 Agustin Suarez
 January 12, 2011
 Assignment 2
 "Competition"
*/

var toQualify = "Matchups",
    motto = "I let my fingers do the talking",
    matchesToAdvance = 6,
    myChoiceTeams = ["Real Madrid", "Manchester United", "Chelsea"],
    OptionB_Money = 75,
    myTeam = "Real Madrid";

// Procedure
console.log("I began to notice with more detail the options for the Tournament. There are three options to enter the FIFA 12 tournament: ");
var selection = function(First){
        //console.log( " + First + " consists of winning 4 games back to back to qualify to finals.");
        var OptionA = true;
            if (OptionA === true){
                console.log("This option is $10 entry fee and you must win at least 6 games to continue on to the finals!")
            } else {
                console.log("If not there are 2 more options available.")
                
                };
};
selection("Option A");
console.log("So I choose this option.");

// Boolean Function
var optionB = function (optionB_Money, matches){
      //console.log("The second option was Option B. This option cost $" + optionB_Money + " to buy in plus you had to win " + matches + " matches back to back to qualify to finals.");
      
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
//console.log(resultOptionB); //return boolean: "The Display shows congrats you qualify for the finals!"

// Number Function
var choosingOption_A = function (match){
        
        var matches = 6,
            result1,
            result2,
            result_choosingOptionA;

        while (matches > 0) {
            console.log(matches + " more games to go.");
            matches --;
          };
        
        console.log("One more game to enter to the finals!")
        if (match === 6) { result1 = "You advance to the next matchup."; }
            else { result1 = "Game Over... please try again."}
            result2 = result1;
            return result2;

};
var theChoice = choosingOption_A(6);
//console.log(theChoice); // Return Number: "You advance to the next matchup"

// String Function
var preferences = function(myTeam, motto){
    var lastPick = "FC Barcelona";
    var defaultConfig = "Tournament Controllers";
    var result1, result2;
    var mySlice = lastPick.slice(0,-5);
    if (lastPick !== "Real Madrid") { result1 =  "The best soccer team in the world is " + myTeam + "!";  }
    else { result1 = "Best soccer team in the world is " + mySlice + "... yeah right.";; }
    result2 = result1;
    return result2;

};
var pick = preferences(myTeam, motto);
//console.log(pick); "Return String: "Best team in the world is Real Madrid."

// Array Function
var myChoiceTeams = ["Real Madrid", "Manchester United", "Chelsea"],
    numberOfTeams, lastTeamIndex,
    
    numberOfTeams = myChoiceTeams.length;
    lastTeamIndex = numberOfTeams -1;
    for (var i = 0; i < myChoiceTeams.length; i++){
    console.log ("Now which team should I choose? " + myChoiceTeams[i] + "?");
};
console.log("My team is " + myChoiceTeams[0] + ".");

