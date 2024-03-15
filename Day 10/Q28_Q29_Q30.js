// Q28
function LifeStage(age) {
    if (age < 0) {
        console.log("Invalid age entered.");
    }
    else if (age < 13) {
        console.log("Child");
    }
    else if (age < 20) {
        console.log("Teenager");
    }
    else if (age < 65) {
        console.log("Adult");
    }
    else if (age < 75) {
        console.log("Senior");
    }
    else if (age < 90) {
        console.log("Most Senior");
    }
    else {
        console.log("Not Defined");
    }
}
var age = 18;
console.log("Your age is:", age);
LifeStage(age);
//Q29 
var favfruits = ["Apple", "Strawberry", "Kiwi"];
function checkFruit(fruit) {
    return favfruits.includes(fruit);
}
var fruitToCheck = "Banana";
if (checkFruit(fruitToCheck)) {
    console.log("".concat(fruitToCheck, " is one of my favorite fruit!"));
}
else {
    console.log("It is not my favorite fruit");
}
//Q30
var usernames = ['admin', 'user1', 'user2', 'user3'];
function greetUsers(usernames) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log("Hello ".concat(username, ": Welcome back, Administrator!"));
        }
        else {
            console.log("Hello ".concat(username, ": Welcome to our Platform!"));
        }
    }
}
greetUsers(usernames);
