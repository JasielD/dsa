let n = 7;

// for(let i=1;i<=n;i++){
//     let row = ""
//     for(let j = 0;j<n-i+1;j++){
//         row += "*"
//     }
//     console.log(row)
// }

for(let i=n;i>0;i--){
    let row = ""
    for(let j = 0;j<i;j++){
        row += "*"
    }
    console.log(row)
}

// *******
// ******
// *****
// ****
// ***
// **
// *