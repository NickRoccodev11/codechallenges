import java.util.HashMap;

class Solution {
  public boolean isIsomorphic(String s, String t) {
      if(s.length() != t.length()){
          return false;
      }
      HashMap<Character, Character> m = new HashMap<>();
      for(int i =0; i < s.length(); i++){
          if(!m.containsKey(s.charAt(i))){
              if(!m.containsValue(t.charAt(i))){
                   m.put(s.charAt(i), t.charAt(i));
              }else{
                  return false;
              }
             
          }else{
              if(m.get(s.charAt(i)) != t.charAt(i)){
                  return false;
              }
          }
      }
      return true;
  }
}