module.exports = function reverse(n) {
    let str = String(Math.abs(n));
    let array = str.split("");
    let reverseArray = array.reverse();
    str = reverseArray.join("");
    return Number(str);
};
