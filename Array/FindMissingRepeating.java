
import java.util.Arrays;

class FindMissingRepeating{
    //brute
    public static int[] find(int[] arr){
        int n = arr.length;
        int repeating = -1;
        int missing = -1;
        int[] ans = new int[2];
        for(int i=1;i<=n;i++){
            int count = 0;
            for(int j=0;j<n;j++){
                if(i == arr[j]){
                    count++;
                } 
            }
            if(count == 2)repeating = i;
            else if(count == 0) missing = i;
            if(repeating != -1 && missing != -1){
                ans[0] = repeating;
                ans[1] = missing;
                break;
            } 
        }
        return ans;
    }
    //better 
    public static int[] find2(int[] arr){
        int n = arr.length;
        int[] hash = new int[n+1];
        for(int i=0;i<n;i++){
            hash[arr[i]]++;
        }
        int repeating = -1;
        int missing = -1;
        for(int i=1;i<=n;i++){
            if(hash[i] == 2) repeating = i;
            else if(hash[i] == 0) missing = i;
            if(repeating != -1 && missing != -1){
                break;
            }
        }
        return new int[]{repeating,missing};
    }
    public static void main(String[] args) {
        int[] arr = {4,3,6,2,1,1};
        System.out.println( Arrays.toString(find2(arr)));

        //better on leetcode
    }
}