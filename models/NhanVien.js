import Person from "./Person.js";

//Tạo ra một lớp đối tượng là nhân viên và kế thừa lại từ perSon giống như cách làm bên Sinh Viên:
class NhanVien extends Person {
    constructor(maID, tenND, Email, diaChi, doiTuong, txtNgayLam, txtLuong){
        super(maID, tenND, Email, diaChi, doiTuong);
        this.maID = maID;
        this.tenND = tenND;
        this.Email = Email;
        this.diaChi = diaChi;
        this.doiTuong = doiTuong;
        this.txtNgayLam = txtNgayLam;
        this.txtLuong = txtLuong;
    };
    //Phương thức tính lương:
    tinhLuong = () => {
        return this.txtNgayLam * this.txtLuong;
    };
};

//Tượng tự như lớp đối tượng sinh viên, cũng export để có thể mang đi sử dụng ở file index.js
export default NhanVien;
// import Person from "./Person.js";

// class NhanVien extends Person {
//     constructor (doiTuong, maID, tenND, Email, diaChi, txtNgayLam, txtLuong) {
//         super(doiTuong, maID, txtTenND, Email, diaChi, txtNgayLam, txtLuong)
//         this.doiTuong = doiTuong;
//         this.maID = maID;
//         this.tenND = tenND;
//         this.Email = Email;
//         this.diaChi = diaChi;
//         this.txtNgayLam = txtNgayLam;
//         this.txtLuong = txtLuong;
//     };
//     tinhNgayLuong = () => {
//         return this.txtLuong * this.txtNgayLam;
//     };
// };
// export default NhanVien;