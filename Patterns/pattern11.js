
let n = 7;

for(let i=0;i<n;i++){
    let row = "";
    if(i%2===0){
    for(let j=0;j<=i;j++){
                if( j%2===0){
                    row += "1";
                }else{
                    row += "0";
                } 
            }
    }else{
         for(let j=0;j<=i;j++){
                if( j%2===0){
                    row += "0";
                }else{
                    row += "1";
                } 
            }
    }
        
        console.log(row)
}
// 1
// 01
// 101
// 0101
// 10101
// 010101