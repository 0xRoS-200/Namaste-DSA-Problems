var getSum = function(a, b) {
    let carry;
    while(b !== 0)
    {
        carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}

let num1 = 10, num2 = 50;
console.log(getSum(num1, num2));
