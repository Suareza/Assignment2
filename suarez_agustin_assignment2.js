/*
 Agustin Suarez
 January 12, 2011
 Assignment 2
 "Competition"
*/

var toQualify = "Matchup",
    numberOfMatches = 6,
    myChoiceTeams = ["Real Madrid", "Manchester United", "FC Barcelona"];

// Procedure
var selection = function(First){
        console.log("There are three options to enter the FIFA 12 tournament but I choose " + First + ". This option consists of winning 4 games back to back to qualify to finals.");
        console.log("This seems pretty easy right?");
        var passOptionA = true;
            if (passOptionA === true){
                console.log("I was so exicted to see the: Congratualtions you have earned a spot for the finals!!!")
            } else {
                console.log("Game Over... I have to start all over again.")
            };
};

selection("Option A");
