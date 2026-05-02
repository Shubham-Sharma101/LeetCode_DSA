var balancedStringSplit = function (s) {
    let rCount = lCount = pairs = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "R") {
            rCount++;
        } else {
            lCount++
        }
        if (rCount === lCount) {
            pairs++;
            rCount = 0;
            lCount = 0;
        }
    }
    return pairs;
};


// Or

var balancedStringSplit = function (s) {
    let temp = pairs = 0
    for (let i = 0; i < s.length; i++) {
         s[i] === "R" ?  temp++ : temp--
        if (temp === 0) {
            pairs++;
        }
    }
    return pairs;
};

/** 
 * Leet Code : 1221
 *  Approach 1 :-> Keep Tarck rCount & lCount
 *  Approach 2 :-> Using One Variable
 */