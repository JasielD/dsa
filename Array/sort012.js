
let arr = [0,1,1,0,1,2,1,2,0,0,0];

//brute force is to use merge Sort 
//better 

function SortColorsBe(nums){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i]=== 0){
                count0++;
            }else if(nums[i] === 1){
                count1++;
            }else{
                count2++;
            }
        }
        for(let i=0;i<=count0-1;i++){
            nums[i] = 0;
        }
        for(let i=count0;i<=count1+count0-1;i++){
            nums[i] = 1;
        }
        for(let i=count0+count1;i<=count0+count1+count2-1;i++){
            nums[i] = 2;
        }
}

function SortColorsOp(nums){
    let low = 0;
        let mid = 0;
        let high = nums.length-1;
        while(mid <= high){
            if(nums[mid] === 0){
                let temp = nums[mid];
                nums[mid] = nums[low];
                nums[low] = temp;
                mid++;
                low++;
            }else if(nums[mid] === 1){
                mid++;
            }else{
                let temp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = temp;
                high--;
            }
        }
}

console.log(arr);
SortColorsOp(arr);
console.log(arr);