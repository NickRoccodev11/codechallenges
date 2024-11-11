
  class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int [] combo = new int[nums1.length];
        int c = 0;
        int p1 = 0;
        int  p2 = 0;
       while (c < m + n ){
        if(p1 == m){
            while(p2 < n ){
                combo[c] = nums2[p2];
                c++;
                p2++;
            }
        }else if(p2 == n){
            while(p1 < m){
                combo[c] = nums1[p1];
                c++;
                p1++;
            }
        }else{
            if(nums1[p1] <= nums2[p2]){
                combo[c] = nums1[p1];
                c++;
                p1++;
             }else{
           combo[c] = nums2[p2];
           c++;
           p2++; 
         }
        } 
       }
      for(int i = 0; i < combo.length; i++){
        nums1[i] = combo[i];
      }
    }
}

