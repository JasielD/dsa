import java.util.*;

 class Solution{
    //brute force
    public static int sol(int[] arr){
        int max = 0;
        for(int i=0;i<arr.length;i++){
            int sum = 0;
            int curCount = 0;
            for(int j=i;j<arr.length;j++){
                sum += arr[j];
                curCount++;
                if(sum == 0){
                    max  = Math.max(curCount, max);
                }
            }
        }

        return max;
    }

//opttimal solution 
public static int sol1(int[] arr){
    int max = 0;
    Map<Integer,Integer> map = new HashMap<>();
    int sum = 0;
    for(int i=0;i<arr.length;i++){
        sum += arr[i];
        if(sum == 0){
            max = i+1;
        }
        if(map.containsKey(sum)){
            max = Math.max(max,i - map.get(sum));
        }else{
            map.put(sum,i);
        }
    }
    return max;
}

    public static void main(String[] args) {
        int[] testArray = {15, -2, 2, -8, 1, 7, 10, 23};
        int result = sol(testArray);
        System.out.println(result);
    }
}
