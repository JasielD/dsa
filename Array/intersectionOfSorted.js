let a = [1,2,2,3,3,4,5,6]
let b =[2,3,3,5,6,6,7]

//brute force 
function intersection(a,b){
    let intersection = []
    let n1 = a.length
    let n2 = b.length
    let visited = Array(n2).fill(0)
    for(let i=0;i<n1;i++){
        for(let j=0;j<n2;j++){
            if(a[i]===b[j] && visited[j]===0){
                intersection.push(a[i])
                visited[j] = 1
                break;
            }
            if(b[j]>a[i]) break;
        }
    }
    return intersection
}

console.log(intersection(a,b))

//optimal solution 
function optimalIntersection(a,b){
    let intersection = []
    let i = 0; let j = 0;
    let n = a.length; let m = b.length;
    while(i<n && j<m){
        if(a[i] < b[j]){
            i++
        }else if(b[j]<a[i]){
            j++
        }else{
            intersection.push(a[i])
            i++
            j++
        }
    }
    return intersection
}
console.log(optimalIntersection(a,b))