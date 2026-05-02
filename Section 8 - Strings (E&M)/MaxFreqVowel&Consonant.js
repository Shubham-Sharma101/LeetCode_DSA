var maxFreqSum = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++;
        }

        // Or

        // map[s[i]] =  !map[s[i]] ? 1 : map[s[i]]++;
    }
    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0;
    let maxConsonant = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            maxVowel = Math.max(maxVowel, map[s[i]])
        } else {
            maxConsonant = Math.max(maxConsonant, map[s[i]])
        }
    }
    return maxVowel + maxConsonant;
};

// Or

var maxFreqSum = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]]) {
            map[s[i]] = 1
        } else {
            map[s[i]]++;
        }
    }
    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0;
    let maxConsonant = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            maxVowel = Math.max(maxVowel, map[s[i]])
        } else {
            maxConsonant = Math.max(maxConsonant, map[s[i]])
        }
    }
    return maxVowel + maxConsonant;
};

// Or

var maxFreqSum = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : map[s[i]]++;
    }
    let vowels = ["a", "e", "i", "o", "u"]
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map)
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            maxVowel = Math.max(maxVowel, map[mapKeys[i]])
        } else {
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
        }
    }
    return maxVowel + maxConsonant;
};


/** 
 * Leet Code : 3541
 *  Approach 1 :-> Using Hash Map
 * * Improvement : Don't Loop on S array second, Loop on hash Map to get max vowel or cpnsonanat
 * *  for (let i = 0; i < mapKeys.length; i++) {} this is not O(n) bcz max it run 26 times -> 26 english alphabet -> 
 * * Here Time complexity is O(1) for second loop & first loop is O(n), So Time Complexity is O(n)
 * * Max english alphabet is 26 -> Space complexity is O(1)
 */