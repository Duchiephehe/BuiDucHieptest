class CongNhan {
    constructor(stt, hoTen, ngaySinh, diaChi, luong, chucVu) {
        this.stt = stt;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.diaChi = diaChi;
        this.luong = luong;
        this.chucVu = chucVu;
    }

    getLastName() {
        const parts = (this.hoTen || '').trim().split(/\s+/);
        return parts.length ? parts[parts.length - 1].toLowerCase() : '';
    }

    toRowArray() {
        return [String(this.stt), this.hoTen, this.ngaySinh, this.diaChi, String(this.luong), this.chucVu];
    }
}

function sortByFullname(arr) {
    return arr.slice().sort((a, b) => a.hoTen.localeCompare(b.hoTen, 'vi', { sensitivity: 'base' }));
}

function sortByLastName(arr) {
    return arr.slice().sort((a, b) => {
        const la = a.getLastName();
        const lb = b.getLastName();
        if (la !== lb) return la.localeCompare(lb, 'vi', { sensitivity: 'base' });
        return a.hoTen.localeCompare(b.hoTen, 'vi', { sensitivity: 'base' });
    });
}

function displayTable(arr) {
    if (!arr || arr.length === 0) {
        console.log('(Không có công nhân.)');
        return;
    }
    const header = ['STT', 'Họ và tên', 'Ngày sinh', 'Địa chỉ', 'Lương', 'Chức vụ'];
    const rows = arr.map((w) => w.toRowArray());
    const allRows = [header].concat(rows);
    const colWidths = header.map((_, i) => Math.max(...allRows.map((r) => (r[i] || '').toString().length)));
    const sep = '+' + colWidths.map((w) => '-'.repeat(w + 2)).join('+') + '+';
    console.log(sep);
    const headerLine = '|' + header.map((h, i) => ' ' + h.padEnd(colWidths[i]) + ' ').join('|') + '|';
    console.log(headerLine);
    console.log(sep);
    for (const r of rows) {
        const line = '|' + r.map((c, i) => ' ' + (c || '').toString().padEnd(colWidths[i]) + ' ').join('|') + '|';
        console.log(line);
    }
    console.log(sep);
}

module.exports = { CongNhan, sortByFullname, sortByLastName, displayTable };