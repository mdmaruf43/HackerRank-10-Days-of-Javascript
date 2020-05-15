function conditionalStatement(score){
    let grade;
    if(25<score && score <30){
        grade = 'A';
        return grade;
    }
    else if(20 < score && score <= 25){
        grade = 'B';
        return grade;
    } 
    else if(15 < score && score <= 20){
        
        grade = 'C';
        return grade;
    }
    else if(10 < score && score <= 15){
        grade = 'D';
        return grade;
    }
    else if(5 < score && score <= 10){
        grade = 'E';
        return grade;
    }
    else if(0 <= score && score <= 5){
        grade = 'F';
        return grade;
    }
}

let output = conditionalStatement(11);
output