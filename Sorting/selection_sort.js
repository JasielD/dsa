const arr = [10, 5, 8, 2, 9, 1, 7, 3, 6, 4];

function selection_Sort (){
    for(let i=0;i<arr.length;i++){
            let mini = i
            for(let j = i;j<arr.length;j++){
                if(arr[j]<arr[mini]){
                    mini = j
                }
            }
        let temp = arr[i];
        arr[i] = arr[mini]
        arr[mini] = temp
    }
}
console.log(arr)
selection_Sort();
console.log(arr)