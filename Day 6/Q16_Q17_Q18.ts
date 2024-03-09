// Q16
 let Guests : string[] = ["Muneeb","Haider","Shadab","Baber"]
 console.log("I want to invite more Guests.!");
Guests.push("Faheem","Shehzad");
Guests.unshift("Sameer","Burhan")
console.log(`${Guests}`);
Guests.splice(3, 2, "Qazi", "Usama"); 

Guests.forEach(Guest => {
    console.log (`Hello \"${Guest}", would u like to join us?`);
})


// Q17
while (Guests.length > 3) {
    let removed = Guests.pop();
    console.log(`Sorry ${removed}, I am not able to invite you to Dinner.`);
}

Guests.forEach(Guest => { 
    console.log(`Dear ${Guest}, u are still invited.` )
});

// Q18
// Create an array of places to visit
const placesToVisit: string[] = ["Paris", "Tokyo", "Rome", "London", "Santorini"];

// Alphabetical order
const alphabeticalOrder: string[] = placesToVisit.slice().sort();

// Reverse alphabetical order
const reverseAlphabeticalOrder: string[] = placesToVisit.slice().sort().reverse();

// Reversed order
const reversedOrder: string[] = placesToVisit.slice().reverse();

// Print the original list of places
console.log("Original list of places to visit:");
console.log(placesToVisit);

// Print the list in alphabetical order
console.log("\nPlaces to visit in alphabetical order:");
console.log(alphabeticalOrder);

// Print the list in reverse alphabetical order
console.log("\nPlaces to visit in reverse alphabetical order:");
console.log(reverseAlphabeticalOrder);

// Print the list in reversed order
console.log("\nPlaces to visit in reversed order:");
console.log(reversedOrder);
