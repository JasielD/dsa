//sum of !st n numbers
//parameterized
function Sum(i,sum){
    if(i<1){
        console.log(sum)
        return
    }
    Sum(i-1,sum+i)
}
// Sum(6,0)

//functional way
function Sum2(n){
    if(n===0){
        return n
    }
    return n + Sum2(n-1)
}
// console.log(Sum2(6))

//factorial of N
function factorial(n){
    if(n===1){
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(6))

