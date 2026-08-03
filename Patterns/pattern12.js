let n = 7;

for(let i=0;i<=n;i++){
    let row = "";
    for(let j=1;j<=i;j++){
        row += j;
    }
    for(let j=i+1;j<=n*2-i;j++){
        row += " ";
    }
     for(let j=i;j>=1;j--){
        row += j;
    }
    console.log(row);
}
// 1            1
// 12          21
// 123        321
// 1234      4321
// 12345    54321
// 123456  654321
// 12345677654321