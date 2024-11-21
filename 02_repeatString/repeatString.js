const repeatString = function(string, num) {
    console.log("FUNCTION CALLED!");
    console.log(`Input string: ${string}, num: ${num}`);
    
    if (num === 0) {
        return "";
    } else if (num < 0) {
        return "ERROR"
    }
    let result = '';
    
    for (let i = 0; i < num; i++){
        result += string;
        console.log(`Loop ${i}: ${result}`);
    }
    
    console.log(`Final result: ${result}`);
    return result;
};


// Do not edit below this line
module.exports = repeatString;
