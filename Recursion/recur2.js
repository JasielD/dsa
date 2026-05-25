let name = "Jasiel";

function printName(i,n){
    if(i>n){
        return ;
    }
    console.log(name)
    printName(i+1,n)
}
// printName(1,5)

function print1_to_N(i,n){
   if(i>n){
    return ;
   } 
   console.log(i)
   print1_to_N(i+1,n)
}
// print1_to_N(1,5)

function printN_to1(i,n){
    if(i<1){
        return
    }
    console.log(i)
    printN_to1(i-1,n)
}
printN_to1(4,4);