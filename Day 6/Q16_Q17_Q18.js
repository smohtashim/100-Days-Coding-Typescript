// Q16
var Guests = ["Muneeb", "Haider", "Shadab", "Baber"];
console.log("I want to invite more Guests.!");
Guests.push("Faheem", "Shehzad");
Guests.unshift("Sameer", "Burhan");
console.log("".concat(Guests));
Guests.splice(3, 2, "Qazi", "Usama");
Guests.forEach(function (Guest) {
    console.log("Hello \"".concat(Guest, "\", would u like to join us?"));
});
// Q17
while (Guests.length > 3) {
    var removed = Guests.pop();
    console.log("Sorry ".concat(removed, ", I am not able to invite you to Dinner."));
}
Guests.forEach(function (Guest) {
    console.log("Dear ".concat(Guest, ", u are still invited."));
});
// Q18
// Create an array of places to visit
var placesToVisit = ["Paris", "Tokyo", "Rome", "London", "Santorini"];
// Alphabetical order
var alphabeticalOrder = placesToVisit.slice().sort();
// Reverse alphabetical order
var reverseAlphabeticalOrder = placesToVisit.slice().sort().reverse();
// Reversed order
var reversedOrder = placesToVisit.slice().reverse();
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
