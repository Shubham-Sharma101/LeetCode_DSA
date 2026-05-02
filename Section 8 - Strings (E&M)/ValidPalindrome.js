var isPalindrome = function (s) {
    s = s.toLowerCase()
    let len = s.length;
    let ptr1 = 0, ptr2 = s.length - 1;
    while (ptr1 <= ptr2) {
        if (!/[a-z0-9]/.test(s[ptr1])) {
            ptr1++
            continue;
        } else if (!/[a-z0-9]/.test(s[ptr2])) {
            ptr2--
            continue;
        }
        if (s[ptr1] != s[ptr2]) {
            return false
        }
        ptr1++;
        ptr2--;
    }
    return true
};

// Or

var isPalindrome = function (s) {
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
    if (
    (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
    (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
    ) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
    }
}
return filteredString === rev;
};

// Or

var isPalindrome = function (s) {
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
    if (
    (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
    (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
    ) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
    }
}
return filteredString === rev;
};


console.log("Ans::::::", isPalindrome("A man, a plan, a canal: Panama"));
console.log("Ans::::::", isPalindrome("race a car"));
console.log("Ans::::::", isPalindrome(" "));
/** 
 * Leet Code : 125
 *  Approach 1 :-> Using Extra Space
 *  Approach 2 :-> Using O(1) Space & 2 Pointer. Start each pointer from each ends.
 */