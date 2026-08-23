

class MergeSortedArray{
    public static  void merge(int[] arr1, int[] arr2){
        int n = arr1.length;
        int m = arr2.length;
        int[] arr3 = new int[n+m];
        int left = 0;
        int right = 0;
        int idx = 0;
        while(left<n && right < m){
            if(arr1[left] <= arr2[right]){
                arr3[idx] = arr1[left];
                idx++;
                left++;
            } else{
                arr3[idx] = arr2[right];
                idx++;
                right++;
            }
        }
        while(left<n){
            arr3[idx++] = arr1[left++];

        }
        while(right<m){
            arr3[idx++] = arr2[right++];

        }
        for(int i=0;i<arr3.length;i++){
            if(i<n){
                arr1[i] = arr3[i];
            }else{
                arr2[i-n] = arr3[i];
            }
        }
    }
    public static void main(String[] args) {
        int[] arr1 = {1,3,5,7};
        int[] arr2 = {0,2,6,8,9};
        print(arr1);
        print(arr2);
        merge(arr1,arr2);
        print(arr1);
        print(arr2);
    }
    static private void  print(int[] arr){
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]);
        }
        System.out.println();
    }
}