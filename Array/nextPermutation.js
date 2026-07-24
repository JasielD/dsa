arr  = [2,1,5,4,3,0,0];

function nextPermutauion(arr){
    let n = arr.length;
    let idx = -1
    for(let i=n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            idx = i;
            break;
        }
    }
    if(idx === -1){
        return reverse(arr,0,n-1);
    }
    for(let i=n-1;i>=idx;i--){
        if(arr[i] > arr[idx]){
            swap(arr,idx,i)
            break;
        }
    }
    reverse(arr,idx+1,n-1);
    return arr;
}
function reverse(arr,start,end){
    while(start<=end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
function swap(arr,left,right){
    let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
}

console.log(arr);
console.log(nextPermutauion(arr))