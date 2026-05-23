//greatest comman divisor and hightst comman factor 

let n1 = 12
let n2 = 9
function GCD(n1,n2){
    for(let i = Math.min(n1,n2);i>=1;i--){
        if(n1%i === 0 && n2%i === 0){
            console.log(i)
            break
        }
    }
}
// GCD(n1,n2)

//Euclidean algorithm
function GCD2(n1,n2){
    while(n1>0 && n2>0){
        if(n1>n2){
            n1 = n1%n2
        }else{
            n2 = n2%n1
        }
    }
    if(n1 === 0){
            console.log(n2)
        }else{
            console.log(n1)
        }
}
GCD2(n1,n2)