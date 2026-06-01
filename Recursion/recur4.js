const arr = [1,3,2,5,4]
let l = 0
let r = arr.length-1
const reverse = function(arr,l,r){
    if(l>=r){
        return arr
    }
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
    return reverse(arr,l+1,r-1)
}
// console.log(reverse(arr,l,r))


//using 1 pointer
function reverse2(arr,i){
    if(i>=arr.length-1-i){
        return arr
    }
    [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]
    return reverse2(arr,i+1)
}
// console.log(reverse2(arr,0))

var isPalindrome = function(s) {
    str = s.toLowerCase().replace(/[^a-z0-9]/g,"")
    function check(i){
        if(i>=str.length-1-i){
            return true
        }
        if(str[i] !== str[str.length-1-i]){
            return false
        }
        return check(i+1)
    }
    return check(0)
};

function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-1)+fib(n-2)
}
console.log(fib(6))