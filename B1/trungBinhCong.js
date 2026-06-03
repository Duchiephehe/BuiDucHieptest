function tinhTrungBinhCongChiaHetCho3(arr) {
    if (arr.length > 50) {
        console.log("Lỗi: Mảng không được vượt quá 50 phần tử.");
        return;
    }

    let tong = 0;
    let soLuong = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            tong += arr[i];
            soLuong++;
        }
    }

    if (soLuong === 0) {
        console.log("Không có số nào trong mảng chia hết cho 3.");
    } else {
        let trungBinhCong = tong / soLuong;
        console.log("Trung bình cộng các số chia hết cho 3 là: " + trungBinhCong);
    }
}

const mangSoNguyen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12]; 

tinhTrungBinhCongChiaHetCho3(mangSoNguyen);
