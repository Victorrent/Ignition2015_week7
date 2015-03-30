// JSFiddle wasn't working, used codecademy instead

var total = 0;
for (var currentNumber = 0; currentNumber < 1000; currentNumber++){
    if (currentNumber % 5 === 0 || currentNumber % 3 === 0){
        total += currentNumber;  
    }
}
if (total === 233168){
    console.log("I finished my first course!")
}
else{
    console.log("You are no Euler")
}