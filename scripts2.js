var randomNumberGenerator = num => {
    return Math.floor(Math.random() * num) + 1
};

var randomNumber = randomNumberGenerator(3);
var count = 0;
var correctGuess = false;

do {
    var userGuess = prompt('I am thinking of a number between 1 and 3. What is it?');
    userGuess = parseInt(userGuess);
    count+= 1;
    if(randomNumber === userGuess){
        correctGuess = true;
    }

} while(!correctGuess);

document.write('You took ' + count + ' attempt(s) !');