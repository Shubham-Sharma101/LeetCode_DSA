var lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length
};

// Or 

var lengthOfLastWord = function (s) {
    s = s.trim().split(" ")
    return s[s.length - 1].length
};

// Or

var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] != " ") {
            break;
        }
        n--;
    }
    let count = 0
    while (n >= 0) {
        if (s[n] === " ") {
            break;
        }
        count++;
        n--;
    }
    return count;
};

// Or

var lengthOfLastWord = function (s) {
    let n = s.length - 1, count = 0;
    while (n >= 0) {
        if (s[n] != " ") {
            count++;
        } else if (count > 0) {
            break;
        }
    }
    return count;
};

/** 
 * Leet Code : 58
 *  Approach 1 :-> Two Loops
 *  Approach 2 :-> One Loop
 */