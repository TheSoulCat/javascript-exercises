let arr = [];
const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {
        for (let i=0; i < num; i++) {
            arr.push(string);
        };
        const result = arr.join("");
        arr = [];
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
