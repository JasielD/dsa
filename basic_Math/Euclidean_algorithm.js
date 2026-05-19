let num = 1634
function Armstrong(n){
    let sum = 0
    let nCopy = n
      while(n>0){
        let last_digit = n%10
        n = Math.floor(n/10);
        sum = sum + n**3
    }
     if(sum === nCopy){
        return true
     }
     return false
}
console.log(Armstrong(num))