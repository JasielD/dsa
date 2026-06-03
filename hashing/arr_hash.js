nums= [1, 2, 3, 2, 4, 1, 2, 5, 12, 12];

const hash = new Array(13).fill(0)

for(let i=0;i<nums.length;i++){
    hash[nums[i]]++
}

const queries = [1,2,12,6];

for(let q of queries){
    console.log(hash[q])
}

