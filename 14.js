/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function(strs) {

  let answer = "";

  if (!strs.length || !strs[0].length) {
      return answer;
  }
  for (let k = 0; k < strs[0].length; k++){
      let curr = strs[0][k];
      for (let l = 0; l < strs.length; l++){
          if (strs[l][k] && strs[l][k] === curr && l === strs.length -1){
              answer+=curr
          }
          if (!strs[l][k] || strs[l][k] !== curr){
              return answer;
        }
      }
  }
  return answer;
};

longestCommonPrefix(["flower","flow","flight"])