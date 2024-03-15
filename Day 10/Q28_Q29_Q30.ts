// Q28
function LifeStage(age: number): void {
    if (age < 0) {
        console.log("Invalid age entered.");
    } else if (age < 13) {
        console.log("Child");
    } else if (age < 20) {
        console.log("Teenager");
    } else if (age < 65) {
        console.log("Adult");
    } else if (age < 75) {
        console.log("Senior");
    } else if (age < 90) {
        console.log("Most Senior");
    } else {
        console.log("Not Defined");
    }
}

const age = 18;
console.log("Your age is:", age);
LifeStage(age);


//Q29 
const favfruits: string[] = ["Apple", "Strawberry", "Kiwi"];

function checkFruit(fruit: string): boolean {
    return favfruits.includes(fruit);
}

const fruitToCheck = "Banana";
if (checkFruit(fruitToCheck)) {
    console.log(`${fruitToCheck} is one of my favorite fruit!`);
} else {
    console.log(`It is not my favorite fruit`);
}

//Q30
const usernames: string[] = ['admin', 'user1', 'user2', 'user3'];

function greetUsers(usernames: string[]): void {
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log(`Hello ${username}: Welcome back, Administrator!`);
        } else {
            console.log(`Hello ${username}: Welcome to our Platform!`);
        }
    }
}
greetUsers(usernames);

