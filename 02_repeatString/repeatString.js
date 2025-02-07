const repeatString = function(string, num) {
    let arr = [];
    for (let i=0; i < num; i++) {
        arr.push(string);
    };
    const result = arr.join("");
    return result;
};

// Do not edit below this line
module.exports = repeatString;
