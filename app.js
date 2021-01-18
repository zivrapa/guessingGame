let input = parseInt(prompt("enter max number!"));

while (!input) {
    input = parseInt(prompt("please enter valid number!"));
}

let randomNum = Math.floor(Math.random() * input) + 1;
console.log(randomNum);
let geussNum = 1;
let input2 = parseInt(prompt("enter your guess"));


while (parseInt(input2) !== randomNum) {
    if (input2 === "q") break;
    geussNum++;
    if (input2 > randomNum) {
        input2 = prompt("your number is too high");


    } else {
        input2 = prompt("your number is too low");

    }
}
if (input2 === "q") { console.log("You quit!"); }
else { console.log(`It took you ${geussNum} geusses`); }
