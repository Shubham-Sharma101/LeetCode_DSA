var reverseString = function (s) {
  let len = s.length, ptr1 = len - 1;
  for (let i = 0; i < len / 2; i++) {
    let temp = s[i];
    s[i] = s[ptr1 - i];
    s[ptr1 - i] = temp
  }
  return s
};

console.log("Final Ans::::", reverseString(["h", "e", "l", "l", "o"]));
console.log("Final Ans::::", reverseString(["H", "a", "n", "n", "a", "h"]))

//Or 

var revValue =  ["h", "e", "l", "l", "o"].reverse()
console.log(revValue)



/** 
 * Leet Code : 344
 *  Approach : 2 Pointers -> Ptr1 will Start from opposite direction and we'll Swipe its value with i index value
 *  & Loop Will run only len/2 times
 */