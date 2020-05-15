function isVowel(c) {
    return 'aeiou'.indexOf(c) !== -1;
}

function bMatch(c){
    return 'bcdfg'.indexOf(c) !== -1 
}

function cMatch(c){
    return 'hjklm'.indexOf(c) !== -1;
}

function dMatch(c){
    return 'npqrstvwxyz'.indexOf(c) !== -1;
}


function conditionalStatements(str){
    let letter;
    for(let s of str){
        if(isVowel(s)){
            letter = 'A';
            return letter;
        }
        else if(bMatch(s)){
            letter = 'B';
            return letter;
        }
        else if(cMatch(s)){
            letter = 'C';
            return letter;
        }
        else if(dMatch(s)){
            letter = 'D';
            return letter;
        }
    }
}

let output = conditionalStatements('npq');
output