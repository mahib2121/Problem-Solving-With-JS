// Write a function that checks if a string is a palindrome (reads the same forward and backward).
function chk(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed
}

console.log(chk("madam"));