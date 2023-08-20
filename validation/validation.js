//check tên 
const regexTen = /^[a-zA-Z'-'\áàảãạăâắằấầặẵẫậéèẻ ẽẹếềểễệóòỏõọôốồổỗộ ơớờởỡợíìỉĩịđùúủũụưứ� �ửữựÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼ� ��ỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞ ỠỢỤỨỪỬỮỰỲỴÝỶỸửữựỵ ýỷỹ]*$/;

//check email
const regexEmail =
/^[a-zA-Z0-9._%+-]{1,18}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,18}$/;
//check maID
const regexID =/^[0-9]{2,4}$/;
//check diaChi
const regexDiaChi = /^[0-9]+\s[A-Za-z\s]+$/;
//check diem
const regexDiem = /^[0-9]$|^10$/;
// check ngày 
const regrexNgay = /^(3[01]|[12][0-9]|[1-9])$/;
//check tiền
const regrexMoney = /^(1\d{6}|[2-9]\d{6}|1[0-9]{7}|2[01][0-9]{7})$/;



// if (isSinhVien) { // Kiểm tra nếu là Sinh viên
//     if (value === "") {
//         alert('Vui lòng không bỏ trống!!');
//         return;
//     };
//     //Đoạn này để kiểm tra xem ô input nào bị bỏ trống:
//     if (value.trim().length === 0) {
//         alert(`Vui lòng không bỏ trống trường ${id} !!`);
//         return;
//     };
//     if (id === 'maID' && value.trim().length === 0) {
//         alert('Vui lòng không bỏ trống Mã Sinh viên !!');
//         return;
//     }
//     if (id === 'tenSV' && value.trim().length === 0) {
//         alert('Vui lòng không bỏ trống Tên Sinh viên !!');
//         return;
//     }
// } else { // Kiểm tra nếu là Nhân viên
//     if (id === 'maNV' && value.trim().length === 0) {
//         alert('Vui lòng không bỏ trống Mã Nhân viên !!');
//         return;
//     }

//     if (id === 'tenNV' && value.trim().length === 0) {
//         alert('Vui lòng không bỏ trống Tên Nhân viên !!');
//         return;
//     }
// }