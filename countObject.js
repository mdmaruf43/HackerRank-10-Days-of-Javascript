function getCount(obj){
    let count = 0;
    obj.forEach(function(o) {
        if(o.x == o.y){
            count++;
        }
    })
    return count;
}



// let inputString = '';
// let currentLine = 0;

// function readLine() {
//     return inputString[currentLine++];
// }

// const n = +(readLine());
// let objects = [];

// for (let i = 0; i < n; i++) {
//     const [a, b] = readLine().split(' ');
    
//     objects.push({x: +(a), y: +(b)});
// }

// console.log(getCount(objects));
