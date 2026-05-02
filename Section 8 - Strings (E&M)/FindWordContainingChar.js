var findWordsContaining = function (words, x) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            res.push(i);
        }
    }
    return res;
};

// Or

var findWordsContaining = function (words, x) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[i][j] === x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};


/** 
 * Leet Code : 2942
 *  Approach 1 :-> Using Built-in Method includes()
 *  Approach 2 :-> Using Two Loops
 */