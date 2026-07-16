let arr = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5];

function majorityArrayElementBru(nums){
    for(let i=0;i<nums.length;i++){
                let count = 0;
                for(let j=0;j<nums.length;j++){
                    if(nums[i] == nums[j]){
                        count++;
                    }
                    if(count > nums.length/2){
                        return nums[i];
                    }
                }
            }
            return -1;
}

function majorityArrayElementBetter(arr){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for(const [key,value] of map){
        if(value > arr.length/2){
            return key;
        }
    }
    return -1
}

function majorityArrayElementOptimal(nums){
      let count = 0;
        let element = 0;
        for(let i=0;i<nums.length;i++){
            if(count === 0){
                count = 1;
                element = nums[i];
            }else if(nums[i] === element){
                count++;
            }else{
                count--;
            }
        }
        let ctn=0;
        for(let i=0;i<nums.length;i++){
            if(element === nums[i]){
                ctn++;
            }
        }
        if(ctn>nums.length/2){
            return element
        }
        return -1

}
console.log(majorityArrayElementOptimal(arr));
