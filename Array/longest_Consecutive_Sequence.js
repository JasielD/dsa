let arr = [0,3,7,2,5,8,4,6,0,1];
let arr1 = [1,0,1,2];
function longestConsecutive(nums) {
        let largest = 0;
        for( let i=0;i<nums.length;i++){
            let count = 1;
            let x = nums[i];
            while(ls(nums,x+1) === true){
                count++;
                x += 1;
            }
            if(count > largest){
                largest = count;
            }
        }
        return largest;
    }
    function ls(arr, x){
        for( i=0;i<arr.length;i++){
            if(x === arr[i]){
                return true;
            }
        }
        return false;
    }

//better solution 

function longestConsecutiveBetter( nums) {
        nums.sort((a,b) => a - b)     
        let largest = 0;
        let curCount =0;
        let lastSmall = -Infinity;
        for(let i=0;i<nums.length;i++){
            if(nums[i]-1 === lastSmall){
                curCount += 1;
                lastSmall = nums[i];
            }else if(nums[i] !== lastSmall){
                curCount = 1;
                lastSmall = nums[i];
            }
            if(curCount > largest){
                largest = curCount;
            }
        }
        return largest;
    }

    //optumal solution 
    function longestConsecutiveOptimal(nums){
         let setNums = new Set();
        let longest = 0;
        for(let i=0;i<nums.length;i++){
            setNums.add(nums[i]);
        }
        for(let item of setNums){
            if(!setNums.has(item-1)){
                let cnt = 1;
                let x = item;
                while(setNums.has(x+1)){
                    cnt += 1;
                    x += 1;
                }
                if(cnt > longest){
                    longest = cnt;
                }
            }
        }
        return longest;
    }
    console.log(longestConsecutiveOptimal(arr1));