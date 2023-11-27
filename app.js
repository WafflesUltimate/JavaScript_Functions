console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) { count *= -1; }

    for (var i = 1;  i <= count;  i++) {
        if (i % 2 == 1){
            console.log(i);
        }
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

    if (age != undefined) {

        if (userName != undefined) {
            var aboveSixteen = "Congrats ${userName}, you can drive!";
            var belowSixteen = "Sorry ${userName}, but you need to wait until you're 16.";
        }
        else {
            aboveSixteen = "Congrats, you can drive!";
            belowSixteen = "Sorry, but you need to wait until you're 16.";
        }

        if (age >= 16) { console.log(aboveSixteen); }
        else { console.log(belowSixteen); }
    }
    else { return false; }
}


console.log("EXERCISE 3:\n==========\n");

function checkQuadtrant(x, y) {

    if (x == 0) {
        console.log("(${x}, ${y}) is on the y axis.");
    }

    else if (y == 0) {
        console.log("(${x}, ${y}) is on the x axis.");
    }

    if (x > 0 && y > 0){
        console.log("(${x}, ${y}) is in Quadrant 1.");
    }

    else if (x > 0 && y < 0) {
        console.log("(${x}, ${y}) is in Quadrant 2.");
    }

    else if (x < 0 && y < 0) {
        console.log("(${x}, ${y}) is in Quadrant 3.");
    }

    else if (x < 0 && y > 0){
        console.log("(${x}, ${y}) is in Quadrant 4.");
    }
}


console.log("EXERCISE 4:\n==========\n");

function triangles(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0)
    {
        console.log("Cannot form a triangle.");
        return false;
    }

    if (a + b > c && a + c > b && b + c > a) { console.log("Triangle formed."); }
    else {
        console.log("Cannot form a triangle.");
        return false;
    }

    if (a == b && b == c) { console.log("The triangle is a equilateral."); }

    else if (a != b && b != c && a != c) { console.log("The triangle is a scalene."); }

    else { console.log("The triangle is a isosceles."); }

}

console.log("Bonus:\n==========\n");

function dataUsage(planLimit, day, usage) {

    var dailyUse = usage / day;
    var recommendedUse = planlimit / 30;
    var daysRemaining = 30 - day;

    var usageDiscrepancy = (dailyUse * 30) - planLimit; 
    if (usageDiscrepancy < 0) { usageDiscrepancy *= -1 }

    console.log("${day} days used, ${daysRemaining} days remaining")
    console.log("Recommended average daily use is: ${recommendedUse} GB/day")


    if (dailyUse > recommendedUse) {
        console.log("You are EXCEEDING your recommended average daily use (${dailyUse} GB/ day), continuing this high usage, you'll exceed your data plan by ${usageDiscrepancy} GB.")
    }

    else {
        console.log("You are BENEATH your recommended daily use (${dailyUse} / day), by continuing this low usage, you'll have ${usageDiscrepancy} GB of unused data.")
    }

}