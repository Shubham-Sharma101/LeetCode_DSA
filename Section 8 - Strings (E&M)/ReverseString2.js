var reverseStr = function (s, k) {
    let len = s.length;
    if (len < k) {
        s = s.split("").reverse().join("")
    } else if (len > k &&  (2 * k) >= len) {
        s = s.split("").splice(0, k).reverse().join("") + s.split("").splice(k).join("")
    }else{
        s = s.split("").splice(0, k).reverse().join("") + s.split("").splice(k).join("")
    }
    return s
};
console.log("Ans::::::", reverseStr(s = "abcdefg", k = 2));
console.log("Ans::::::", reverseStr(s = "abcd", k = 2));
// console.log("Ans::::::","Hello".split("").splice(0,3).reverse().join("") + "Hello".split("").splice(3).join("") );
/** 
 * Leet Code : 541
 */