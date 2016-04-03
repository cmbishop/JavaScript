// create secretNumber
var secretNumber = 4;
// ask user for guess
var guess = Number(prompt("Guess a number."));
// check guess
if(guess === secretNumber) {
    alert("You got it right!");
}

else if (guess > secretNumber) {
    alert("Your guess is too high.");
}

else {
    alert("Your guess is too low.");
}