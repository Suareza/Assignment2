/*
 Agustin Suarez
 January 12, 2011
 Assignment 2
 "Competition"
*/

var toQualify = "Matchup",
    matchesToAdvance = 6,
    myChoiceTeams = ["Real Madrid", "Manchester United", "FC Barcelona"],
    OptionB_Money = 75;

/*
 // Same Example - Return the greeting as a string.

var getGreetingByName = function(name) {
    var currentHour = (new Date()).getHours(),
        timeOfDay, greeting;
    if (currentHour < 12) { timeOfDay = "morning"; }
    else if (currentHour < 17) { timeOfDay = "afternoon";}
    else { timeOfDay = "evening"; }
    greeting = "Good " + timeOfDay + ", " + name + "!";
    // console.log(greeting);
    return greeting;

};
var fullGreeting = getGreetingByName("Agustin");
console.log(fullGreeting);
*/

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
//console.log(resultOptionB); //return boolean: "The Display show congrats you qualify for the finals!"

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
        if (match === 6) { result1 = "You earned your spot in the Finals."; }
            else { result1 = "Game Over... please try again."}
            result2 = result1;
            return result2;

};
var theChoice = choosingOption_A(6);
//console.log(theChoice); // Return Number: "You earned your spot in the Finals."
/*
 // Same Example - Return the greeting as a string.

var getGreetingByName = function(name) {
    var currentHour = (new Date()).getHours(),
        timeOfDay, greeting;
    if (currentHour < 12) { timeOfDay = "morning"; }
    else if (currentHour < 17) { timeOfDay = "afternoon";}
    else { timeOfDay = "evening"; }
    greeting = "Good " + timeOfDay + ", " + name + "!";
    // console.log(greeting);
    return greeting;

};
var fullGreeting = getGreetingByName("Agustin");
console.log(fullGreeting);
*/


