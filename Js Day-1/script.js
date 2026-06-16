console.log("Hussain");
// var a=11;
// var b=12.22;
var c = "Mohammad";
var d = false
console.log(a);
console.log(b);
console.log(c);
console.log(d);


var a = 10;
var b = "10";

if (a == b) {
    console.log("bommali");
} else {
    console.log("ammali");
}


//strict

if (a === b) {
    console.log("bommali");
} else {
    console.log("ammali");
}


for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var userInput = 789;
if ((userInput % 4 === 0 && userInput % 100 !== 0) || (userInput % 400 === 0)) {
    console.log("Leap")
}
else {
    console.log("Not Leap")
}




var a = 2; var n = 0;
for (var i = 1; i <= a / 2; i++) {
    if (a % i == 0) {
        n++;
    }
}
if (n == 2) {
    console.log("prime");
}
else {
    console.log("Not");
}