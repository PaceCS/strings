// The input to lowerCamelCase will be a string
// It will log the string as well as the string converted to lower camel case
function lowerCamelCase(inString) {
    // First log the user's string
    console.log();

    // You will first separate the words by using the split method
    const arr = inString.split(' ');

    // Now make the first word lower case using the toLowerCase method
    let outString = arr[0].toLowerCase();

    // Put in the conditions to have your for loop go through each word
    for (let i = /*Put condition here*/; i < /*Put condition here*/; i += 1) {
        // Let w reprsent the current word
        let w = arr[i];

        //First capitalize the first letter of your word and store it in an output word
        let wOut = w[0].toUpperCase();

        //Put in the appropriate conditions to have your for loop go through each letter of the word
        for (let j = /*Put condition here*/; j < /*Put condition here*/; j += 1) {
            // Add these letters to your output word
            wOut += w[j];
        }

        // Add each word to the string that you will return to the user
        outString += wOut;
    }

    // Return outString to the user
    console.log();
}


lowerCamelCase("My first variable");
lowerCamelCase("The variable to store the number");
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = ['Hello', 'My name is Sarah', 'How are you'];
const result = ['hello', 'myNameIsSarah', 'howAreYou'];
const log = [true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    lowerCamelCase(a[i]);
    log[0] = log[0] && (out[0] == `You entered '${a[i]}'.`);
    log[1] = log[1] && (out[1] == `In lower camel case, your string is ${result[i]}.`);
}
printme(`\t did you properly return the user input?\t ${log[0]} `);
printme(`\t did you properly return the number of vowels?\t ${log[1]}`);
