// The input to snakeCase will be a string
// It will log the string as well as the string converted to snake case
function snakeCase(inString) {

}


snakeCase("My first variable");
snakeCase("The variable to store the number");
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = ['Hello', 'My name is Sarah', 'How are you'];
const result = ['hello', 'my_name_is_sarah', 'how_are_you'];
const log = [true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    snakeCase(a[i]);
    log[0] = log[0] && (out[0] == `You entered '${a[i]}'.`);
    log[1] = log[1] && (out[1] == `In snake case, your string is ${result[i]}.`);
}
printme(`\t did you properly return the user input?\t ${log[0]} `);
printme(`\t did you properly return the number of vowels?\t ${log[1]}`);
