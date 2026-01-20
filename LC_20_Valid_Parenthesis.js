var isValid = function(s) {
    let stack = [];
    let map = {
        '(': 1, '{': 2, '[': 3,
        ')': -1, '}': -2, ']': -3
    };

    for (let ch of s) {
        let val = map[ch];

        if (val > 0) {
            stack.push(val);
        } else {
            
            if (stack.length === 0) return false;

            let top = stack.pop();
            if (top !== Math.abs(val)) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()[]{}")); 
console.log(isValid("(]"));     
console.log(isValid("([)]"));  
