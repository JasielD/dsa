str = "abacaba"

const hash = new Array(25).fill(0)

for(let ch of str){
    hash[ch.charCodeAt(0) - "a".charCodeAt(0)]++
}


const queries = ['a', 'b', 'c', 'd'];

for(let q of queries){
    console.log(hash[q.charCodeAt(0)- 97])
}