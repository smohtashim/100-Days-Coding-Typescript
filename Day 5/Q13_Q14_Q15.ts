// Q13
let vehicles : string[] = ["Helicopter","Plane","Ship","Train"]
vehicles.forEach(vehicle => {
console.log(`I would love to travel on \"${vehicle}\".`)
});

// Q14
let guests : string[] = ["Ali","Faisal","Rizwan","Shoaib"]
for (let i = 0; i < guests.length; i++) {
    console.log (`Hello \"${guests[i]}", would u like to come to attend dinner at my place?`)
}

// Q15
let not_coming = "Faisal";
console.log(`\n\"${not_coming}" is unable to attend dinner with us.\n`)
const indexOfFaisal =  guests.indexOf("Faisal");
if  (indexOfFaisal !== -1) {
    guests[indexOfFaisal] = "Furqan";
}

for (let i = 0; i < guests.length; i++) {
    console.log(`Hello \"${guests[i]}", would u like to come over for dinner at my place?`)
}

guests.forEach(guest => {
    console.log(`Hell0 \"${guest}", are u coming to my place for dinner?`)
});