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
console.log(printOdds(32));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {

    if (age != undefined) {

        if (userName != undefined) {
            var aboveSixteen = `Congrats ${userName}, you can drive!`;
            var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
        }
        else {
            aboveSixteen = "Congrats, you can drive!";
            belowSixteen = "Sorry, but you need to wait until you're 16.";
        }

        if (age >= 16) { console.log(aboveSixteen); }
        else { console.log(belowSixteen); }
    }
    else { return "Cannot determine."; }
}
console.log(checkAge("David", 20));
console.log(checkAge(null, 14));
console.log(checkAge("David"));


console.log("EXERCISE 3:\n==========\n");

function checkQuadtrant(x, y) {

    if (x == 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    }

    else if (y == 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    }

    if (x > 0 && y > 0){
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    }

    else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    }

    else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    }

    else if (x > 0 && y < 0){
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

console.log(checkQuadtrant(0, 2));
console.log(checkQuadtrant(2, 0));
console.log(checkQuadtrant(2, 3));
console.log(checkQuadtrant(-2, 2));
console.log(checkQuadtrant(-3, -4));
console.log(checkQuadtrant(2, -6));


console.log("EXERCISE 4:\n==========\n");

function triangles(a, b, c) {

    if (a <= 0 || b <= 0 || c <= 0)
    {
        return "Cannot form a triangle.";
    }

    if (a + b > c && a + c > b && b + c > a) { console.log("Triangle formed."); }
    else {
        return "Cannot form a triangle.";
    }

    if (a == b && b == c) { console.log("The triangle is a equilateral."); }

    else if (a != b && b != c && a != c) { console.log("The triangle is a scalene."); }

    else { console.log("The triangle is a isosceles."); }

}

console.log(triangles(2, 3, 4));
console.log(triangles(2, 2, 2));
console.log(triangles(1, 2, 2));
console.log(triangles(1, 1, 2));


console.log("Bonus:\n==========\n");

function dataUsage(planLimit, day, usage) {

    var recommendedUse = planLimit / 30;
    recommendedUse = parseFloat((recommendedUse).toFixed(2));

    var dailyUse = usage / day;
    dailyUse = parseFloat((dailyUse).toFixed(2));

    var daysRemaining = 30 - day;

    var usageDiscrepancy = (dailyUse * 30) - planLimit; 
    if (usageDiscrepancy < 0) { usageDiscrepancy *= -1 }
    usageDiscrepancy = parseFloat((usageDiscrepancy).toFixed(2));

    console.log(`${day} days used, ${daysRemaining} days remaining`)
    console.log(`Average daily use is: ${dailyUse} GB/day`)


    if (dailyUse > recommendedUse) {
        console.log(`You are EXCEEDING your recommended average daily use (${recommendedUse} GB/day), continuing this high usage, you'll exceed your data plan by ${usageDiscrepancy} GB.`)
    }
    else if (dailyUse == recommendedUse) {
        console.log(`Your daily usage is perfectly aligned with your recommended daily use (${recommendedUse} GB/day), by continuing this usage, you will not exceed data target and not waste data.`)
    }

    else {
        console.log(`You are BENEATH your recommended daily use (${recommendedUse} GB/day), by continuing this low usage, you'll have ${usageDiscrepancy} GB of unused data.`)
    }
}

console.log(dataUsage(100, 15, 60));
console.log(dataUsage(50, 5, 8.35));
console.log(dataUsage(75, 13, 10));