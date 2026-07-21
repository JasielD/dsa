let arr = [7,1,5,3,6,4];

function maxProfit(arr){
    let maxProfit = 0;
    for(let i=0;i<arr.length;i++){
        for(let j = i;j<arr.length;j++){
            let currentProfit = arr[j] - arr[i];
            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }
    }
    return maxProfit;
}

console.log(maxProfit(arr))

function maxProfitOptimal(arr){
    let mini = arr[0];
    let maxProfit = 0;
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<mini){
            mini = arr[i];
        }else{
            let currentProfit = arr[i] - mini;
            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }

    }
    return maxProfit;
}

console.log(maxProfitOptimal(arr))