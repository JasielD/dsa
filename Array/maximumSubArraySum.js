
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let arr2 = [5,4,-1,7,8];
let arr3 = [1];

var maxSubArray = function(arr) {
    let sum = 0
let max = arr[0]
for(let i = 1;i<arr.length; i++){
    sum += arr[i]
    if(sum>max){
        max = sum
    }
    if(sum<0){
        sum = 0
    }
}
return max
};

console.log(maxSubArray(arr));

//brute force

function maxSubArrayBrutte(arr){
    if(arr.length < 2) return arr[0]
    let max = -Infinity;
    for(let i = 0;i<arr.length;i++){
        let sum = arr[i]
        for(let j=i+1;j<arr.length;j++){
            sum += arr[j];
            if(sum > max){
                max = sum
            }
        }
    }
    return max;
}

console.log(maxSubArrayBrutte(arr3))