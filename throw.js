function isPositive(a) {
    if(a>=1){
        return 'YES';
    }
    else if(a == 0){
        return ('Zero Error');
    }
    else{
        return ('Negative Error');
    }
}

let output = isPositive(-9);
output