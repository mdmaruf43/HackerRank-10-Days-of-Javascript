// Returns a boolean denoting whether or not c is a vowel
function isVowel(c) {
    return 'aeiouAEIOU'.indexOf(c) !== -1;
}

function vowelsAndConsonants(s) {
    let v = [];
    let c = [];
    
    // For each character in the string:
    for (const e of s) {
        if (isVowel(e)) {
            v.push(e);
        } else {
            c.push(e);
        }
    }
    
    // Print vowels
    for (let e of v) {
        console.log(e);
    }
    
    // Print consonants
    for (const e of c) {
        console.log(e);
    }
}

vowelsAndConsonants('javascriptloops')