function modifyArray(nums) {
    let store = [];
    for(let i = 0; i<=nums.length-1; i++){ 
        if(nums[i] % 2 == 0){
            store.push(nums[i]*2);
        } else{
            store.push(nums[i]*3);
        }
    }
    return store;
}

const output = modifyArray([1,2,3,5]);
output;
