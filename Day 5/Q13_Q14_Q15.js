// Q13
var vehicles = ["Helicopter", "Plane", "Ship", "Train"];
vehicles.forEach(function (vehicle) {
    console.log("I would love to travel on \"".concat(vehicle, "\"."));
});
// Q14
var guests = ["Ali", "Faisal", "Rizwan", "Shoaib"];
for (var i = 0; i < guests.length; i++) {
    console.log("Hello \"".concat(guests[i], "\" would u like to come to attend dinner at my place?"));
}
// Q15
var not_coming = "Faisal";
console.log("\n\"".concat(not_coming, "\" is unable to attend dinner with us.\n"));
var indexOfFaisal = guests.indexOf("Faisal");
if (indexOfFaisal !== -1) {
    guests[indexOfFaisal] = "Furqan";
}
for (var i = 0; i < guests.length; i++) {
    console.log("Hello \"".concat(guests[i], "\" would u like to come over for dinner at my place?"));
}
guests.forEach(function (guest) {
    console.log("Hell0 \"".concat(guest, "\" are u coming to my place for dinner?"));
});
