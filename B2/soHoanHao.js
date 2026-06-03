
function isPerfect(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) return false;
    if (n === 1) return false;

    let sum = 1;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= limit; i++) {
        if (n % i === 0) {
            sum += i;
            const j = n / i;
            if (j !== i) sum += j;
        }
    }

    return sum === n;
}

module.exports = { isPerfect };

if (require.main === module) {
    const input = process.argv[2];
    if (!input) {
        console.log('Usage: node soHoanHao.js <positive-integer>');
        process.exit(1);
    }
    const n = Number(input);
    console.log(isPerfect(n) ? 'True' : 'False');
}
