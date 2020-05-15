function getScondLargest(num){
    let max1 = 0;
    for(let e of num){
        if(max1 < e){
            max1= e;
        }
    }

    let max2 = 0;
    for(let e of num){
        if(max2 < e && e < max1){
            max2 = e;
        }
    }
    return max2;
}

let output = getScondLargest([1,2,3,5,6]);
output