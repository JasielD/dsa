let arr = [1,2,4,5];
let N = 5

function missingBrute(arr,n){
    for(let i=1;i<=5;i++){
        let flag = false
        for(j=0;j<n-1;k=j++){
            if(arr[j]===i){
                flag = true;
                break;
            }
        }
        if(flag === false){
            return i
        }
    }
}

console.log(missingBrute(arr,N))

function missingBetter(arr,n){
    let hash = new Array(n+1).fill(0)
    for(let i=0;i<n;i++){
        hash[arr[i]] = 1
    }
    for(i=1;i<=n;i++){
        if(hash[i]===0){

            return i
        }
    }
}
console.log(missingBetter(arr,N))

function missingOptimal1(arr,n){
    let sum1 = (n*(n+1))/2
    let sum2 = 0
    for(let i=0;i<n-1;i++){
        sum2 += arr[i]
    }
    return sum1 - sum2;
}
console.log(missingOptimal1(arr,N))

function missingOptimal2(arr,n){
    let XOR1 = 0;
    let XOR2 = 0;
    for(let i=0;i<n-1;i++){
        XOR2 = XOR2 ^ arr[i]
        XOR2 = XOR2 ^ (i+1)
    }
    XOR2 = XOR2 ^ n
    return XOR1 ^ XOR2;

}
console.log(missingOptimal2(arr,N))