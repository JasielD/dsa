 const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];
 
 function insersion_Sort(arr){
     for(let i=0;i<arr.length;i++){
        let j = i
        while(j>0 && arr[j-1]>arr[j]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp
            j--
        }
    }
 }


console.log(arr);
insersion_Sort(arr);
console.log(arr);