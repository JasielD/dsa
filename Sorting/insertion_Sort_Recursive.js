 const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];

 function Sort(arr,i=0){
    if(i === arr.length) return
    let j = i
    while(j>0 && arr[j-1]>arr[j]){
        [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
        j--
    }
    Sort(arr,i+1)
 }

 console.log(arr)
 Sort(arr)
 console.log(arr)