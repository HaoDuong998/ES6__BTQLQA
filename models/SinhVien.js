import Person from "./Person.js";

//tạo ra một lớp đối tượng sinh viên và cho kế thừa lại từ lớp đối tượng gốc là perSon:
class SinhVien extends Person{
    constructor( maID, tenND, Email, diaChi ,doiTuong, diemToan, diemLy, diemHoa) {
        super(doiTuong, maID, tenND, Email, diaChi);
        this.maID = maID;
        this.tenND = tenND;
        this.Email = Email;
        this.diaChi = diaChi;
        this.doiTuong = doiTuong;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    };
    //lớp đối tượng học sinh thì sẽ có tính điểm trung bình:
    //Tạo phương thức tính điểm trunh bình như bên dưới:
    tinhDiemTrungBinh = () => {
        return (this.diemToan * 1  + this.diemLy * 1 + this.diemHoa * 1) / 3;
    };
};

//Export để có thể mang qua bên index.js file chính để sử dụng:
export default SinhVien;

// import Person from "./Person.js";

// class SinhVien extends Person {
//     constructor(doiTuong, maID, tenND, Email, diaChi, diemToan, diemLy, diemHoa){
//         super(doiTuong,maID, tenND, Email, diaChi);
//         this.doiTuong = doiTuong;
//         this.maID = maID;
//         this.tenND = tenND;
//         this.Email = Email;
//         this.diaChi = diaChi;
//         this.diemToan = diemToan;
//         this.diemLy = diemLy;
//         this.diemHoa = diemHoa;
//     };
//     tinhDiemTrungBinh = () => {
//         return (this.diemToan* 1 + this.diemLy* 1 + this.diemHoa* 1) / 3;
//     };
// };
// export default SinhVien;