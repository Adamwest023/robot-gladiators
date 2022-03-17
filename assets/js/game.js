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

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

//this creates a function named "fight"
var fight = function (enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemyHealth > 0 && enemyHealth > 0) {
        //anything inside the curly brackets is called the block code

        //ask player if they want to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        };

        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable 
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attached " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."

        );
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            break;
        } else {
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
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

//function to start a new game 
var startGame = function () {
    //have to reset player stats ar the start of each game
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost " + playerName + "in battle! Game Over!");
            break;
        }
    }
    // play again 
    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");

    }
    else {
        window.alert(" You've lost " + playerName + "in battle."); 
    }

    //ask if player would like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();