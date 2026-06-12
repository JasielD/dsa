const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];

function mergeSort(arr,low=0,high=arr.length-1){
    if(low>=high) return
    
    let middle = Math.floor((low+high)/2)
    mergeSort(arr,low,middle)
    mergeSort(arr,middle+1,high)
    merge(arr,low,middle,high)
}

function merge(arr,low,middle,high){
    let left = low
    let right = middle+1
    let res = []

    while(left <= middle && right <= high){
        if(arr[left] < arr[right]){
            res.push(arr[left])
            left++
        }else{
            res.push(arr[right])
            right++
        }
    }
    while(left<=middle){
        res.push(arr[left])
        left++
    }
    while(right <= high){
        res.push(arr[right])
        right++
    }
    for(let i=low;i<=high;i++){
        arr[i] = res[i - low]
    }
}
console.log(arr)
mergeSort(arr)
console.log(arr)