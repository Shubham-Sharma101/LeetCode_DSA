var groupAnagrams = function (strs) {
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");
        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]
        } else {
            map[sortedStr].push(strs[i])
        }
    }
    return Object.values(map)
};

// Or

var groupAnagrams = function (strs) {
   
};

/** 
 * Leet Code : 49
 *  Approach 1 :-> Sorted Key :-> Sort the particular element & check it exist in map or not, if not exist then create the key, if exist add it in the array.
 *  Approach 2 :-> Hashed Key 
 */