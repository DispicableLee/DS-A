// ================================== Brute Force Solution w/HashMap ===============================
class Solution {
    //this function 'twoSum' takes an array of integers(nums) and a single integer(target)
    public int[] twoSum(int[] nums, int target) {
        //create a new HashMap
        Map hm = new HashMap();
    for(int i=0;i { 
         hm.put(nums[i],i);
    }   
for(int i=0;i {
   int k =nums[i];
   if(k == target && hm.containsKey(0) ){
         arr[0]= i;
         arr[1]=hm.get(0);
         break;
  } else if(hm.containsKey(target-k) ){
        if(hm.get(target-k)>i){      
            arr[0]= i;
            arr[1]=hm.get(target-k);
            break;} 
    }
}
   return arr;
}
    }
}
//=======================================fast(er) solution ==================================
//the vector class in java is an array that can grow or shrink as requires, as opposed to a one-time
//array that you can't change:
//  vector
class Solution {
public:
    vector<int> twoSum(vector<int> &nums, int target) {
        unordered_map<int, int> visited;
        int len = nums.size();
        for (int i = 0; i < len; ++i) {
            int n = nums[i];
            int complement = target - n;
            if (visited.count(complement)) {
                return {visited[complement], i};
            }
            visited[n] = i;  // assume that each input would have exactly one solution
        }
        return {};
    }
}; 