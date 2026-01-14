/*
 *  find the longest string without repeating
 *  make a frequency map if has set temp value to size/current looping index
 *
 */

function lengthOfLongestSubstring(s: string): number {
  let map = new Map<string, number>();
  let longest = 0;

  const split = s.split("");
  for (let i = 0; i < split.length; i++) {
    for (let j = i; j < split.length; j++) {
      if (map.size > longest) {
        longest = map.size;
      }

      if (map.has(split[j])) {
        map = new Map();
        continue;
      }

      map.set(split[j], 1);
    }
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
