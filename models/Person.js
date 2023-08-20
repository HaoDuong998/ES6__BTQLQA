//Tạo ra 1 lớp đối tượng là person để làm gốc để các lớp đối tượng còn lại kế thừa theo:
class Person {
    constructor(maID, tenND, Email, diaChi ,doiTuong){
        this.maID = maID;
        this.tenND = tenND;
        this.Email = Email
        this.diaChi = diaChi;
        this.doiTuong = doiTuong;
    };
};

//export để có thể mang đi sài bất kì đâu ở các lớp (class) thuộc tính sinhVien, nhanVien, khachHang
export default Person
// //Tạo ra một lớp đối tượng là person:
// class Person {
//     constructor(doiTuong, maID, tenND, Email, diaChi){
//         this.doiTuong = doiTuong;
//         this.maID = maID;
//         this.tenND = tenND;
//         this.Email = Email;
//         this.diaChi = diaChi;
//     };
// };
// export default Person;