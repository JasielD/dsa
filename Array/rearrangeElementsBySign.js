let arr = [3,1,-2,-5,2,-4];
let arr1 = [3,1,-2,-5,2,-4,2,4,7];


function rearrangeBySign(nums){
 let ans = [];
        let pos = 0;
        let neg = 1;
        for(let i = 0;i<nums.length;i++){
            if(nums[i] > 0){
                ans[pos] = nums[i];
                pos += 2;
            }else{
                ans[neg] = nums[i];
                neg  += 2;
            }
        }
        return ans;
}

console.log(rearrangeBySign(arr))

function rearrangeBySignBrute(arr){
    let pos = [];
    let neg = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > 0){
            pos.push(arr[i]);
        }else{
            neg.push(arr[i]);
        }
    }
    for(let i = 0;i<arr.length/2;i++){
        arr[i*2] = pos[i];
        arr[i*2+1] = neg[i];
    }
    return arr;
}
console.log(rearrangeBySignBrute(arr))

//when positive elements and negative elements are not equal
function rearrangeBySignVariety2(arr){
    let pos = [];
    let neg = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i] > 0){
            pos.push(arr[i]);
        }else{
            neg.push(arr[i]);
        }
    }
    if(pos.length > neg.length){
        for(let i=0;i<neg.length;i++){
            arr[i*2] = pos[i];
            arr[i*2+1] = neg[i];
        }
        let idx = neg.length*2;
        for(let i=idx;i<pos.length;i++){
            arr[idx] = pos[i];
            idx++;
        }
    }else{
        for(let i=0;i<pos.length;i++){
            arr[i*2] = pos[i];
            arr[i*2+1] = neg[i];
        }
        let idx = neg.length*2;
        for(let i=idx;i<neg.length;i++){
            arr[idx] = neg[i];
            idx++;
        }
    }
    return arr;
}

console.log(rearrangeBySignVariety2(arr1))