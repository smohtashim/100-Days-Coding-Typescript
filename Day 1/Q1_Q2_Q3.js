// Q2 
var personname = "Syed";
console.log("\t \"Hello '".concat(personname, "' would u like to learn some Typesript today?\" \t"));
// Q3
var p_name = "Syed Mohtashim Ali";
console.log("Lowercase:", p_name.toLowerCase());
console.log("Uppercase:", p_name.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log("Titlecase:", toTitleCase(p_name));
