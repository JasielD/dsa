var check = function(arr) {
    let count = 0
    let n = arr.length
    for(let i=0;i<n;i++){
        if(arr[(i+1)%n]<arr[i]){
            count++
        }
    }
    if(count<=1){
        return true
    }else{
        return false
    }
}