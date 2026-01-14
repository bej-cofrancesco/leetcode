/*
 *  find the longest string without repeating
 *  make a frequency map if has set temp value to size/current looping index
 *
 */

function lengthOfLongestSubstring(s: string): number {
  let set = new Set();
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);
    longest = Math.max(longest, set.size);
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("jbpnbwwd"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("au"));
