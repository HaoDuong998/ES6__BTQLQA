import ListPerson from "./models/ListPerson.js";
import NhanVien from "./models/NhanVien.js";
import SinhVien from "./models/SinhVien.js";
//sự kiện thêm ng dùng:
let listPerson = new ListPerson();
// console.log(listPerson);
listPerson.layLocalDT();
//Thêm Đối Tượng:
const themDoiTuong = (event) => {
    //ngăn chặn load trang:
    event.preventDefault();
    // console.log('kẹc')
    let arrField = document.querySelectorAll("#QLHVForm input");
    // console.log(arrField);
    let person;
    const nutLuaChon = document.getElementById("doiTuong");
    // console.log(nutLuaChon)
    if (nutLuaChon.value === "sinhVien") {
        person = new SinhVien();
        document.getElementById("txtNgayLam").value = "none";
        document.getElementById("txtLuong").value = "none";
    } else if (nutLuaChon.value === "nhanVien") {
        person = new NhanVien();
        document.getElementById("diemToan").value = "none";
        document.getElementById("diemLy").value = "none";
        document.getElementById("diemBHoa").value = "none";
    } else {
        alert("Vui lòng chọn Đối Tượng");
        return;
    }
    // console.log(person);
    console.log(arrField);
    for (let item of arrField) {
        // console.log(item)
        const { id, value } = item;
        // console.log(id,value);
        if (value === "") {
            alert("Vui lòng không bỏ trống !!");
            return;
        };
        console.log(value)
        if (value !== "") {
            if (id === 'maID' && !regexID.test(value)) {
                alert("ID có độ dài từ 2 đến 4 số !!");
                return;
            };
            if (id=== 'tenND' && !regexTen.test(value)) {
                alert("Vui lòng nhập đúng tên")
                return;
            };
            if (id === 'Email' && !regexEmail.test(value)) {
                alert("Sai địng dạng Email");
                return;
            };

        };
        person[id] = value;
    }

    listPerson.themDoiTuong(person);
    listPerson.renderGiaoDien();
    //Thao tác xử lý khi ng dùng nhập xong sẽ clear hết thông tin đã nhập ở trên các ô input + tắt form :
    document.getElementById("QLHVForm").reset();
    document.querySelector("#QLHVForm .btn-secondary").click();
    listPerson.renderGiaoDien();
    listPerson.luuLocalDT();
};

//Xoá Đối Tượng:
const xoaDoiTuong = (id) => {
    listPerson.xoaDoiTuong(id);
};

window.themDoiTuong = themDoiTuong;
window.xoaDoiTuong = xoaDoiTuong;
// window.renderGiaoDien = renderGiaoDien;

// lấy ra value thì dùng for of dùng khi cần lấy ra các giá trị ng dùng nhập trong các ô input
// lấy ra vị trí index dùng for in dùng trong các phương thức xóa
