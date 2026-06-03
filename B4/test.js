const { CongNhan, sortByFullname, sortByLastName, displayTable } = require('./quanLyCongNhan');

const ds = [
    new CongNhan(1, 'Truong Tan A', '11-11-1977', 'Quang Nam', 2000, 'Abc'),
    new CongNhan(2, 'Truong Tan B', '11-11-1998', 'Da Nang', 2000, 'Abc'),
    new CongNhan(3, 'Truong Tan C', '11-11-1999', 'Hue', 2000, 'Abc'),
    new CongNhan(4, 'Nguyen Van A', '01-01-1990', 'Hanoi', 3000, 'Leader'),
    new CongNhan(5, 'Tran Thi B', '02-02-1992', 'HCM', 2500, 'Staff'),
];

console.log('--- Sắp xếp theo họ và tên (fullname) ---');
displayTable(sortByFullname(ds));

console.log('\n--- Sắp xếp theo tên (last name) ---');
displayTable(sortByLastName(ds));
