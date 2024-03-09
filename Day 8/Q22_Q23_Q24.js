// Q22
var items = ["Laptop", "Computer", "Mobile", "Smart watch"];
console.log(items[4]);
console.log(items[2]);
items[1] = "PC";
console.log(items[1]);
// Q23
var f_name = "Syed";
var l_name = "Mohtashim";
var my_age = 25;
var my_city = "Karachi";
var my_num = 7;
var itsTrue = true;
console.log("Does My First Name is Mohtashim?", f_name === "Mohtashim");
console.log("Does My Age is greater than My Number?", my_age > my_num);
console.log("Does My Last Name is not equal to Syed?", l_name !== "Syed");
console.log("Does My Age is not equal to My Number?", !(my_age === my_num));
console.log("Does My Age is less than My Number OR My First Name is equal to Syed?", my_age < my_num || f_name === "Syed");
console.log("Does the characters in My City is more than My last Name?", my_city.length > l_name.length);
console.log("Its True AND My Number is equal to My Age?", itsTrue && (my_num === my_age));
// Q24
var sub = ["Physics", "Chemistry", "English", "Object Oriented Programming", "Economics"];
var my_obj = { name: "Shoaib", height: 5.11, color: "Fair" };
console.log("Does My Object has the property of \"Color\"?", my_obj.hasOwnProperty("color"));
console.log("Is Economics included in subjects?", sub.includes("Economics"));
console.log("Does My Object has the property of \"Age\"?", my_obj.hasOwnProperty("age"));
console.log("Is Physics not in subjects?", !sub.includes("Physics"));
