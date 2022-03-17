//functions are the building blocks of Javascript 
// a function is a predefined action that we can call or invoke in our code 
// a function must always include parenthesis even if they are empty
// when a browser reads the function name and sees the parentheses, it knows to execute the function
// placing content between the () is called passing an argument into a function

//capture the user's response and save it as a variable
//variable is a named location for a value that gets stored in the browser's memory when a program is running
//console.log is actually apart of the browser web api 

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
}
var playerInfo = {
    name: window.prompt("What is your robot's name"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.monet -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }

};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Tim",
        attack: randomNumber(10, 14)
    }
]


//this creates a function named "fight"
var fight = function (enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemy.health > 0 && enemy.health > 0) {
        //anything inside the curly brackets is called the block code

        //ask player if they want to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes(true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        };

        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable 
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        //log a resulting message to the console so we know that it worked
        console.log(
            playerInfo.name + " attached " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."

        );
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update in the `playerInfo.health` variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        // Log a resulting message to the console so we know that it worked 
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        if (playerInfo.health <= 0) {
            window.alert(playerInfo.health + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//function to start a new game 
var startGame = function () {

    //have to reset player stats ar the start of each game
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array and still alive 
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask inf player wants to use the store before next round
                var confirmStore = window.confirm("Would you like to visit the store?");

                //if yes enter the store 
                if (confirmStore) {
                    shop();
                };
            }
        }
        else {
            window.alert("You have lost " + playerInfo.name + "in battle! Game Over!");
            break;
        }
    }
    // play again 
    endGame();
}

var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");

    }
    else {
        window.alert(" You've lost " + playerInfo.name + "in battle.");
    }

    //ask if player would like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//build a shop 
var shop = function () {
    // ask player what they'd like to do 
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");

            // do nothing, so the function will end 
            break;
        default:
            window.alert("You did not pick a valid option. try again");

            //call shop() again to force the player to pick a vaild choice
            shop();
            break;
    }

};
startGame();