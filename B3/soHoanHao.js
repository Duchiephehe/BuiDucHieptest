function isPerfectNumber(n) {
    if (!Number.isInteger(n) || n <= 0) return false;
    let sum = 0;
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}

module.exports = { isPerfectNumber };
