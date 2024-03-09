// Q10
// This Program convert the value of string variable in UPPERCASE, LOWERCASE and TITLECASE.
var my_name = "Syed Mohtashim Ali"; // Declare string variable my_name and stores the value in it.
console.log("Lowercase:", my_name.toLowerCase()); // print on the console in lowercase letters with the lowercase funtion.
console.log("Uppercase:", my_name.toUpperCase()); // print the variable in uppercase with uppercase function.
function TitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
} // str.replace replaces the character from '/\w\S*' regular expression that matches the pattern of words (Sequence of Alphanumeric characters).
// '/g' flag uses for globally accros the string not just for the first match.
// function (txt) {...} is the call back funtion that takes each match found by the regular expression (represented by '(txt)').
// 'txt.charAt(0).toUpperCase()' takes the first character of the matched word ('txt') converts it into uppercase
// 'txt.substr(1).toLowerCase()' takes the rest of the characters of the matched word ('txt') starting from the second character and converts them into lowercase.
// These two parts are then concatenated together to form the transformed word.
console.log("Titlecase:", TitleCase(my_name));
// Finally print the result of calling logs 'TitleCase(my_name)' to the console.
// it takes the string 'my_name', applies TitleCase funtion to it and then logs the transformed string along with the label "Titlecase:" to the console.
// So, overall, the function TitleCase takes a string, capitalizes the first letter of each word, and converts the rest of the letters to lowercase, 
// and then returns the transformed string. 
// The console.log statement simply prints this transformed string to the console.
// Q11
var names = ["Zain", "Zeeshan", "Shahzaib", "Owais"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Q12
var f_names = ["Shahzaib", "Zain", "Owais", "Zeeshan"];
f_names.forEach(function (f_name) {
    console.log("Hello ".concat(f_name, "! How are you?"));
});
