let num = 36 
function allDivisores(n){
  for(let i=1;i<=n;i++){
    if(n%i === 0){
      console.log(i)
    }
  }
}
// allDivisores(num)

function allDivisores2 (n){
  for(let i=1;i*i<=n;i++){
    if(n%i === 0){
      console.log(i)
      if(n/i !== i){
        console.log(n/i)
      }
    }
  }
}

// allDivisores2(num)

function primeNumber (n){
  let count = 0
  for(let i=1;i*i<=n;i++){
    if(n%i === 0){
      count++
      if(n/i !== i){
        count++
      }
    }
  }
  if(count === 2){
    return true
  }else{
    return false
  }
}

console.log(primeNumber(18))