//functions are the building blocks of Javascript 
// a function is a predefined action that we can call or invoke in our code 
// a function must always include parenthesis even if they are empty
// when a browser reads the function name and sees the parentheses, it knows to execute the function
// placing content between the () is called passing an argument into a function

//capture the user's response and save it as a variable
//variable is a named location for a value that gets stored in the browser's memory when a program is running
var playerName = window.prompt("What is your robot's name? ");

//calls the variable we just created
//console.log is actually apart of the browser web api 
console.log(playerName);

var name = 'your name';
console.log(name);

//this creates a function named "fight"
function fight() {
    //anything inside the curly brackets is called the block code
    window.alert("The fight has begun!");

}

//call the function
// fight()