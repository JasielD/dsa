let arr = [2,6,5,8,11]
let target = 14;

//brutte Force
function twoSumBrutte(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] + arr[j]===target){
                return [i,j]
            }
        }
    }
    return []
}
console.log(twoSumBrutte(arr,target));

//better solution
function twoSumBetter(arr,target){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        let complement = target - arr[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(arr[i],i)
    }
    return []
}
console.log(twoSumBetter(arr,target))

function twoSumOp(nums,target){
    let left = 0;
    let right = nums.length-1;
    let arr = nums.sort((a,b)=>a-b)
    while(left<right){
        sum = arr[left]+arr[right];
        if(sum === target){
            return "YES";
        }else if(sum < target){
            left++
        }else right--
    }
    return "NO"
}
console.log(twoSumOp(arr,target))