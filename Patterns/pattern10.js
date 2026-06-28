
let n = 7

for(let i=0;i<=2*n-1;i++){
    let stars = i;
    let row = ""
    if(i>n) stars = 2*n-i
    for(let j=1;j<=stars;j++){
        row += "*"
    }
    console.log(row)
}
// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *