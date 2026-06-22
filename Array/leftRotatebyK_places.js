let arr  = [1,2,3,4,5,6]

//rotate by one place 

function rotateByOnePlace(arr){
    let temp = arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = temp
}
console.log(arr);
rotateByOnePlace(arr)
console.log(arr);

//rotate to left by k places 

var rotate = function(nums, k) { let temp = [];
    for(let i=0;i<k;i++){ 
        temp.push(nums[i])
     } 
    for(let i=k;i<nums.length;i++){
         nums[i-k] = nums[i] 
        } 
    for(let i=nums.length-k;i<nums.length;i++){
         nums[i] = temp[i-(nums.length-k)] 
        }
    };

