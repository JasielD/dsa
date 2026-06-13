function quickSort(arr,low = 0,high=arr.length-1){
        if(low<high){
            let partitionIdx = partition(arr,low,high)
            quickSort(arr,low,partitionIdx -1)
            quickSort(arr,partitionIdx+1,high)
        }
    }
    function partition(arr,low,high){
        let pivot = arr[low] 
        let i =low;
        let j = high;
        while(i<j){
            while(arr[i]<=pivot && i<=high-1){
                i++
            }
            while(arr[j]>pivot && j>=low+1){
                j--
            }
            if(i<j){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        let temp  = arr[low]
        arr[low] = arr[j]
        arr[j] = temp
        return j
    }
    quickSort(arr)
