// Reverse string takes a string as an input and returns the reverse of that string as an output
function reverseString(inString) {
    // First return the user's input
    console.log();

    // This will hold the reverse of the string
    let outString = '';

    // This loop will start at the end of the string and add each successive letter to outString
    // Be careful! Your loop starts at the end
    for (let i = /*Put condition here*/; i  /*Put condition here*/; i -= 1) {
        outString += inString[i];
    }

    // Log the result to the console
    console.log();
}

reverseString('Hello');
reverseString('My name is Sarah');
reverseString('abracadabra');


















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
printme('\nTesting...');
const a = ['Hello', 'My name is Sarah', 'How are you'];
const result = ['olleH', 'haraS si eman yM', 'uoy era woH'];
const log = [true, true];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    reverseString(a[i]);
    log[0] = log[0] && (out[0] == `You entered '${a[i]}'.`);
    log[1] = log[1] && (out[1] == `Your string reversed is '${result[i]}'.`);
}
printme(`\t did you properly return the user input?\t ${log[0]} `);
printme(`\t did you properly return the result?\t ${log[1]}`);
