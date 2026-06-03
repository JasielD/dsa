arr = [10, 15, 3, 7,10,10,15,10,7,10];
const map = new Map(); 
for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
       map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}
const querries = [10,7]
    for(const q of querries){
        console.log(map.get(q))
    }