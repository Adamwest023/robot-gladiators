//functions are the building blocks of Javascript 
// a function is a predefined action that we can call or invoke in our code 
// a function must always include parenthesis even if they are empty
// when a browser reads the function name and sees the parentheses, it knows to execute the function
// placing content between the () is called passing an argument into a function

//capture the user's response and save it as a variable
//variable is a named location for a value that gets stored in the browser's memory when a program is running
//console.log is actually apart of the browser web api 

var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//this creates a function named "fight"
var fight = function (enemyName) {
    //anything inside the curly brackets is called the block code
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //chcek enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " has " + enemyHealth + " health left.");
        }

        //if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
    } else {
        // if no (false), ask question again by running fight() again
        fight();
    }

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable 
    enemyHealth = enemyHealth - playerAttack;

    //log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attached " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    //subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update in the `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerHealth + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
 
//call the function
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}