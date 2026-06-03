function daysInMonth(mmYYYY) {
    if (typeof mmYYYY !== 'string') return null;
    const parts = mmYYYY.split('/');
    if (parts.length !== 2) return null;
    const mm = parseInt(parts[0], 10);
    const yyyy = parseInt(parts[1], 10);
    if (!Number.isInteger(mm) || !Number.isInteger(yyyy)) return null;
    if (mm < 1 || mm > 12) return null;

    const isLeap = (year) => {
        if (year % 400 === 0) return true;
        if (year % 100 === 0) return false;
        return year % 4 === 0;
    };

    if (mm === 2) return isLeap(yyyy) ? 29 : 28;
    if ([4, 6, 9, 11].includes(mm)) return 30;
    return 31;
}

module.exports = { daysInMonth };
