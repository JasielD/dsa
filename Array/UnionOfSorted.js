let arr1 = [1,1,2,3,4,5];
let arr2 = [2,3,4,4,5,6];

//bruteForce approch
function findUnion(arr1,arr2){
    let set = new Set();
    let union = []
    for(let i=0;i<arr1.length;i++){
        set.add(arr1[i])
    }
    for(let i=0;i<arr2.length;i++){
        set.add(arr2[i])
    }
    for(let e of set){
        union.push(e)
    }
    return union
}

//optimal approch
function union(arr1,arr2){
    let union = []
    let n1 = arr1.length;
    let n2 = arr2.length;
    let i = 0 ; let j = 0;
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            if(union.length === 0 || union[union.length-1] !== arr1[i]){
                union.push(arr1[i])
            }
            i++
        }else{
            if(union.length === 0 || union[union.length-1] !== arr2[j]){
                union.push(arr2[j])
            }
            j++
        }
    }
    while(i<n1){
        if(union.length === 0 || union[union.length-1] !== arr1[i]){
                union.push(arr1[i])
            }
            i++
    }
    while(j<n2){
        if(union.length === 0 || union[union.length-1] !== arr2[j]){
                union.push(arr2[j])
            }
            j++
    }
    return union
}

console.log(union(arr1,arr2));
