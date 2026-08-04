let matrix = [[1,2,3],[4,5,6],[7,8,9]];

function rotateMatrix90Brute(arr){
    let n = matrix.length;
    let m = matrix[0].length;
        let ans = [[],[],[]]
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                ans[j][n-1-i] = arr[i][j];
            }
        }
        for(let i=0;i<n;i++){
            console.log(ans[i]);
        }
        
}

// for(let i=0;i<matrix.length;i++){
//             console.log(matrix[i]);
//         }

// rotateMatrix90Brute(matrix);

//optimal 
function rotateMatrix90Optimal(arr){
      let n = arr.length;
        let m = arr[0].length;
        for(let i=0;i<n-1;i++){
            for(let j=i+1;j<m;j++){
                let temp = arr[i][j];
                 arr[i][j] = arr[j][i];
                 arr[j][i] = temp;
            }
        }
        for(let i=0;i<n;i++){
            reverse (matrix[i],0,n-1 );
        }
         for(let i=0;i<n;i++){
            console.log(arr[i]);
        }

}
function reverse(arr,left=0,right=arr.length-1){
     while(left<right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            right--;
            left++;
        }
}

for(let i=0;i<matrix.length;i++){
            console.log(matrix[i]);
        }

rotateMatrix90Optimal(matrix);
