const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

// The input to countVowels will be a string.
// It will log the string as well as the number of vowels to the console.
function countVowels(inString) {


}

countVowels('Hello');
countVowels('My name is Sarah');























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = ['Hello', 'My name is Sarah.', 'How are you?', 'phyllum'];
const result = [2, 6, 6, 2];
const log = [true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    countVowels(a[i]);
    log[0] = log[0] && (out[0] == `You entered '${a[i]}'.`);
    log[1] = log[1] && (out[1] == `It has ${result[i]} vowels.`);

}
printme(`\t did you properly return the user input?\t ${log[0]} `);
printme(`\t did you properly return the number of vowels?\t ${log[1]}`);
