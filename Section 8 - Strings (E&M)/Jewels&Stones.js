var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};

// Or

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        for (let j = 0; j < jewels.length; j++) {
            if (jewels[j] === stones[i]) {
                count++;
                break;
            }

        }
    }
    return count;
};

// Or

var numJewelsInStones = function (jewels, stones) {
    let jSet = new Set();
    for (let i = 0; i < jewels.length; i++) {
        jSet.add(jewels[i]);
    }
    for (let i = 0; i < jewels.length; i++) {
        if (jSet.has(stones[i])) {
            count++;
        }
    }
    return count;
};

/** 
 * Leet Code : 771
 *  Approach 1 :-> Using Includes 
 *  Approach 2 :-> Using Two Loops
 *  Approach 3 :-> Set/ Hash Map
 */