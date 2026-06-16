 const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];

 function Sort(arr,n=arr.length){
    if(n === 1) return
    let swap = false
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            swap = true
        }
        
    }
    if(!swap)return
    Sort(arr,n-1)
 }

 console.log(arr)
 Sort(arr)
 console.log(arr)