var isIsomorphic = function (s, t) {
    let mapStoT = {};
    let mapTtoS = {};
    for (let i = 0; i < s.length; i++) {
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i]
        } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false
        }
    }
    return true
};

/** 
 * Leet Code : 205
 *  Approach 1 :-> Use Two Hash Maps to Solve, One map to keep track of the values of S & other to keep track the values of t.
 */