var randomNumGenerator = num => {
    return Math.floor(Math.random() * num ) + 1 // 0 to Num
};

var randomNum = randomNumGenerator(5);
var counterNum = 0;
var count = 0;
document.write('The random number was ' + randomNum);
while(counterNum != randomNum ){
    counterNum = randomNumGenerator(5);
    count += 1;
    if(counterNum == randomNum){
        document.write('<p>It took the computer ' + count + ' attempts to get it right.</p>');
        break;
    }
}

