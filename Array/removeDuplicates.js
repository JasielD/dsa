//remove duplicate in place 
let nums = [1,1,2,3,3,4,4]
function removeDuplicate(nums){
    let count = 0
    let unique = new Set();
    for(let i=0;i<nums.length;i++){
        unique.add(nums[i])
    }
    for(val of unique){
        nums[count] = val
        count++
    }
    return count
}
console.log(nums);
console.log(removeDuplicate1(nums))
console.log(nums);

//O(n log n + n)

//optimal solution 
function removeDuplicate1(nums){
    let i = 0
    for(let j=1;j<nums.length;j++){
        if(nums[i] !== nums[j]){
            nums[i+1] = nums[j]
            i++
        }
    }
    return i+1
}