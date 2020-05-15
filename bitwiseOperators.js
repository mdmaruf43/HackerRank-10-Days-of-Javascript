/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    let max = 0;

    for (let i = 1; i < n; i++) {
        
        for (let j = i + 1; j <= n; j++) {
            
            let bitwiseAnd = i & j;
            
            if (bitwiseAnd < k && max < bitwiseAnd) {
                max = bitwiseAnd;
            }
        }
    }
    
    return max;
}

const output = getMaxLessThanK(9, 2);
output