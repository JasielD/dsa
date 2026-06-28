let n = 7

for(let i=0;i<n;i++){
    let row = ""
    //space 
    for(let j=0;j<=i;j++){
        row += " "
    }
    //star
    for(let j=0;j<2*n-(2*i+1);j++){
        row += "*"
    }
    //space 
    for(let j=0;j<=i;j++){
        row += " "
    }
    console.log(row)
}
//  ************* 
//   ***********  
//    *********   
//     *******    
//      *****     
//       ***      
//        *  