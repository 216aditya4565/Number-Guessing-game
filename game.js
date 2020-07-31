const $submit = document.getElementById("submit"); 
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guess = Math.round(Math.random() * 100); //Computer selects a random number to be guessed(guessed number) using the random() function
var lives = 10;
var message;

$submit.onclick = () => {
    let userInput = document.getElementById("number-input").value; //Initializing variable that accepts user input from index.html file
    lives--;  //When user guesses a number, one life decreases
    if (userInput == guess) {
        location.href = "./win.html";    //If user input is equal to random number, then user is redirected to win.html
    } else if (lives == 0) {
        location.href = "./lose.html" //If all lives are finished and number selected by user is not equal to the random number, then user is redirected to lose.html
    } else if (userInput > guess) {
        message = `Oops ! Your guess is too high. You have ${lives}lives left.`; //If number selected by user is greater than random number, user is acknowledged about the same.
    } else if (userInput < guess) {
        message = `Oops ! Your guess is too low. You have ${lives} lives left.`; //If number selected by user is lesser than random number, user is acknowledged about the same.
    }

    $message.style.display = "inherit"; 
    $message.innerHTML = message; // Message is seen in DOM
    $lives.innerHTML = lives; //Number of lives are seen in DOM
}
