let arr = [1,2,3,1,1,1,1,4,2,3];
let k = 4;

//brute solution
function longSubarray(arr,k){
    let len = 0;
    let n = arr.length;
    for(let i = 0; i<n;i++){
        let sum = 0
        for(let j = i;j<n;j++){
            sum += arr[j];
            if(sum === k){
                len = Math.max(len,j-i+1)
            }
        }
    }
    return len 
}

console.log(longSubarray(arr,k))

//better solution
function longSubarrayBe(arr,k){
    let n = arr.length;
    let prefixSum = 0
    let map = new Map();
    let longestlen = 0
    for(let i=0;i<n;i++){
        prefixSum += arr[i];
        if(prefixSum === k){
            longestlen = i+1
        }
        let rem = prefixSum - k
        if(map.has(rem)){
            let len = i - map.get(rem);
            longestlen = Math.max(longestlen,len);
        }
        if(!map.has(prefixSum)){
            map.set(prefixSum,i)
        }
    }
    return longestlen;
}
console.log(longSubarrayBe(arr,k))

//optimal solution
function longSubarrayOp(arr,k){
    let maxLen = 0
    let right = 0
    let left = 0;
    let sum = arr[0]
    while(right < arr.length){
        while(left<= right && sum>k){
            sum -= arr[left];
            left++
        } 
        if(sum == k){
           maxLen = Math.max(maxLen,right-left+1); 
        };
        right++
        if(right<arr.length){
            sum += arr[right]
        } 
    }
    return maxLen;
}

console.log(longSubarrayOp(arr,k))