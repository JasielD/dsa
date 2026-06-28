let arr  = [1,2,3,4,5,6,7]

//rotate by one place 

function rotateByOnePlace(arr){
    let temp = arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i]
    }
    arr[arr.length-1] = temp
}
// console.log(arr);
// rotateByOnePlace(arr)
// console.log(arr);

//rotate to left by k places 

var rotate = function(nums, k) { 
    k = k%nums.length
    let temp = [];
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

    // console.log(arr)
    // rotate(arr,3)
    // console.log(arr)

//rotate to right by k places

var rotateRight = function(nums,k){
let n  = nums.length
    let temp = []
    k = k%n
    for(let i=n-k;i<n;i++){
        temp.push(nums[i])
    }
    for(let i=n-k-1;i>=0;i--){
        nums[i+k] = nums[i]
    }
    for(let i=0;i<k;i++){
        nums[i] = temp[i]
    }
}
// console.log(arr)
// rotateRight(arr,3)
// console.log(arr)

function rotateLeftOp(nums,k){
    let n = nums.length
    k=k%nums.length
    function reverse(arr,start,end){
        while(start<=end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    reverse(nums,0,k-1)
    reverse(nums,k,n-1)
    reverse(nums,0,n-1)
}
// console.log(arr)
// rotateLeftOp(arr,3)
// console.log(arr)

function rotateRightOp(nums,k){
    let n = nums.length
    k=k%nums.length
    function reverse(arr,start,end){
        while(start<=end){
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    reverse(nums,n-k,n-1)
    reverse(nums,0,n-k-1)
    reverse(nums,0,n-1)
}
console.log(arr);
rotateRightOp(arr,3);
console.log(arr)

