let matrix = [[1,1,1],[1,0,1],[1,1,1]];

//brute force 
function setZeros(arr){
          let n = matrix.length;
        let m = matrix[0].length;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j] === 0){
                    markRow(matrix, i);
                    markCol(matrix, j);
                }
            }
        }
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j] === 9989){
                    matrix[i][j] = 0;
                }
            }
        }
        return arr;

    }
function markCol(arr, j){
        for(let i=0;i<arr.length;i++){
            if(arr[i][j] !== 0){
                arr[i][j] = 9989;
            }
        }
    }

function markRow( arr, i){
   for(let j=0;j<arr[0].length;j++){
        if(arr[i][j] !== 0){
            arr[i][j] = 9989;
            }
        }
    }

//better 
function setZerosBetter(arr){
        let n = matrix.length;
        let m = matrix[0].length;
        let  row = [];
        let  col = [];
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j] === 0){
                    row[i] = 1;
                    col[j] = 1;
                }
            }
        }
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(col[j] === 1 || row[i] === 1){
                    matrix[i][j] = 0;
                }
            }
        }   
        return arr; 
}

//optimal solution 
function setZerosOptimal(arr){
 let n = matrix.length;
        let m = matrix[0].length;
        let col0 = 1;
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(matrix[i][j]===0){
                    matrix[i][0] = 0;
                    if(j !== 0){
                        matrix[0][j] = 0;
                    }else{
                        col0 = 0;
                    }
                }
            }
        }
        for(let i=1;i<n;i++){
            for(let j=1;j<m;j++){
                if(matrix[i][0] === 0 || matrix[0][j]===0){
                    matrix[i][j] = 0;
                }
            }
        }
        if(matrix[0][0] === 0){
            for(let j=0;j<m;j++){
                matrix[0][j] = 0;
            }
        }
        if(col0 == 0){
            for(let i=0;i<n;i++){
                matrix [i][0] = 0;
            }
        }
        return arr;
    }

let ans = setZerosOptimal(matrix)
for(let i=0;i<ans.length;i++){
    console.log(ans[i]);
}