const $submit = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guess = Math.round(Math.random() * 100);
var lives = 10;
var message;

$submit.onclick = () => {
    let userInput = document.getElementById("number-input").value;
    lives--;
    if (userInput == guess) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html"
    } else if (userInput > guess) {
        message = `Oops ! Your guess is too high. You have ${lives}lives left.`;
    } else if (userInput < guess) {
        message = `Oops ! Your guess is too low. You have ${lives} lives left.`;
    }

    $message.style.display = "inherit";
    $message.innerHTML = message;
    $lives.innerHTML = lives;
}