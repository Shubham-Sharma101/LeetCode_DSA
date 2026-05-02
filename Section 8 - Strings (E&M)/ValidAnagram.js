var isAnagram = function (s, t) {
    return s.split("").sort().join(" ") === t.split("").sort().join(" ")
};

// Or

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] < 0) {
            return false;
        } else {
            --map[t[i]];
        }
    }

    return true;
};

/** 
 * Leet Code : 242
 *  Approach 1 :-> Using in-built string methods :-> split(), sort(), join()
 *  Approach 2 :-> Using Hash Map
 */