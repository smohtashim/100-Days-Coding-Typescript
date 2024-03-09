// Q19
var n_guests = ["Muneeb", "Haider", "Shadab", "Baber"];
console.log("I want to invite more Guests.!");
n_guests.push("Faheem", "Shehzad");
n_guests.unshift("Sameer", "Burhan");
console.log("".concat(n_guests));
n_guests.splice(3, 2, "Qazi", "Usama");
console.log("I am inviting total ".concat(n_guests.length, " Guests"));
n_guests.forEach(function (n_guest) {
    console.log("Hello \"".concat(n_guest, "\", would u like to join us?"));
});
// Q20
var fruits = ["Apple", "Mango", "Strawberry", "Kiwi", "Guava", "Honeydew Melon"];
console.log("Fruits that i love to eat", fruits);
// Q21
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var animal_1 = {
    name: "Cat",
    food: "Meat",
    quantity: 3,
    colors: ["White", "Black", "Brown"]
};
var animal_2 = {
    name: "Dog",
    food: "Bone",
    colors: ["Black", "Grey"],
    quantity: 2
};
var animal_3 = {
    name: "Goat",
    food: "Grass",
    colors: ["Brown", "White", "Tan", "Roan"],
    quantity: 4
};
function AnimalDetail(animal) {
    console.log("Name: \"".concat(animal.name, "\""));
    console.log("Food: \"".concat(animal.food, "\""));
    console.log("Colors:");
    animal.colors.forEach(function (color) {
        console.log("\"".concat(color, "\""));
    });
    console.log("Quantity: \"".concat(animal.quantity, "\""));
    console.log();
}
AnimalDetail(animal_1);
AnimalDetail(animal_2);
AnimalDetail(animal_3);
