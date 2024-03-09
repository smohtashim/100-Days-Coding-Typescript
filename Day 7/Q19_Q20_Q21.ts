// Q19
let n_guests : string[] = ["Muneeb","Haider","Shadab","Baber"]
 console.log("I want to invite more Guests.!");
n_guests.push("Faheem","Shehzad");
n_guests.unshift("Sameer","Burhan")
console.log(`${n_guests}`);
n_guests.splice(3, 2, "Qazi", "Usama"); 
console.log(`I am inviting total ${n_guests.length} Guests`);

n_guests.forEach(n_guest => {
    console.log (`Hello \"${n_guest}", would u like to join us?`);
});


// Q20
let fruits : string[] = ["Apple","Mango","Strawberry","Kiwi","Guava","Honeydew Melon"]
console.log("Fruits that i love to eat", fruits)


// Q21
class Animal {

    name: string;
    food: string;
    quantity: number;
    colors: string [];
}

let animal_1 : Animal = {

    name : "Cat",
    food : "Meat",
    quantity : 3,
    colors : ["White", "Black","Brown"]

}; 


let animal_2 : Animal = {

    name : "Dog",
    food : "Bone",
    colors : ["Black","Grey"],
    quantity : 2

};

let animal_3 : Animal = {

    name : "Goat",
    food : "Grass",
    colors : ["Brown","White","Tan", "Roan"],
    quantity : 4
}

function AnimalDetail (animal : Animal): void{
    console.log (`Name: \"${animal.name}"`);
    console.log (`Food: \"${animal.food}"`);
    console.log ("Colors:");
    animal.colors.forEach(color => {  
        console.log(`\"${color}"`); 
    });
    console.log (`Quantity: \"${animal.quantity}"`)
    console.log();
}
AnimalDetail(animal_1);
AnimalDetail(animal_2);
AnimalDetail(animal_3);
