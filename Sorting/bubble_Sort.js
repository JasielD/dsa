const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];

function bubble_Sort(arr){
    for(let i=arr.length-1;i>=0;i--){
        let didSwap = false
        for(j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let tem = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tem
                didSwap = true
            }
        }
        if(!didSwap){
            break;
        }
    }
}

console.log(arr);
bubble_Sort(arr);
console.log(arr);