 let n = 7789

//  function extractNumbers(n){
//     while(n>0){
//         lastDigit = n%10
//         n = Math.floor(n/10);
//         console.log(lastDigit)
//     }
//  }
//  extractNumbers(n)

 function countNumbers(n){
    // let count = Math.log10(n)+1
    while(n>0){
        n = Math.floor(n/10);
        count++
    }
    
    return count
 }
//  console.log(countNumbers(n))

  function reverseNumbers(n){
    let reverseNum = 0
    while(n>0){
        let last_digit = n%10
        n = Math.floor(n/10);
        reverseNum = (reverseNum*10) + last_digit
    }
    
    return reverseNum
 }
//  console.log(reverseNumbers(n))

 function Palimdrome(n){
    let reverseNum = 0
    let nCopy = n
    while(n>0){
        let last_digit = n%10
        n = Math.floor(n/10);
        reverseNum = (reverseNum*10) + last_digit
    }
    if(reverseNum === nCopy){
        return true
    }else{
        return false
    }
 }
 console.log(Palimdrome(n))

 let num = 1634
function Armstrong(n){
    let sum = 0
    let nCopy = n
    let power = n.toString().length
      while(n>0){
        let last_digit = n%10
        n = Math.floor(n/10);
        sum = sum + last_digit**power
    }
     if(sum === nCopy){
        return true
     }
     return false
}
console.log(Armstrong(num))