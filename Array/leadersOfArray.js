let arr = [10,22,12,3,0,6];

function reverse(arr,start,end){
        while(start<end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
        return arr
    }
function leadersBrute(arr){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        let leader = true;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]>arr[i]){
                leader = false;
                break;
            }
        }
        if(leader === true){
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(leadersBrute(arr))

function leadersOptimal(arr){
    let max = -Infinity;
    let ans = [];
    for(let i=arr.length-1;i>=0;i--){
        if(arr[i]>max){
            ans.push(arr[i]);
            max = arr[i];
        }
    }
    return reverse(ans,0,ans.length-1);
}
console.log(leadersOptimal(arr))