// The input to snakeCase will be a string
// It will log the string as well as the string converted to snake case
function palindrome(inString) {
    
}

palindrome('Hello');
palindrome('Anna');
palindrome('madam');
























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = ['Hello', 'abba', 'AbCdeDcba', 'fantastical'];
const result = [false, true, true, false];
const log = [true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    palindrome(a[i]);
    const pref = result[i] ? '' : 'not ';
    log[0] = log[0] && (out[0] == `You entered '${a[i]}'.`);
    log[1] = log[1] && (out[1] == `It is ${pref}a palindrome.`);
}
printme(`\t did you properly return the user input?\t ${log[0]} `);
printme(`\t did you properly return the result?\t ${log[1]}`);
