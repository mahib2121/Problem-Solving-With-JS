// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
function chk(str) {
    let c = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            c++;
        }
    }

    return c;
}

console.log(chk("programming"));
