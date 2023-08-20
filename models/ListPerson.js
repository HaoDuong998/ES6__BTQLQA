import SinhVien from "./SinhVien.js";
import NhanVien from "./NhanVien.js";

//Tạo ra một lớp đối tượng là listPerson để qly:
class ListPerson {
  arrListPerson = [];
  //Phương thức thêm đối tượng dô mảng
  themDoiTuong = (person) => {
    this.arrListPerson.push(person);
    // console.log(this.arrListPerson);
  };
  renderGiaoDien = (idHienThi = "tbodyQLHV", arr = this.arrListPerson) => {
    let content = "";
    for (let person of arr) {
      // console.log(person);
      if (person instanceof SinhVien) {
        content += 
            `
            <tr>
                <td>${person.maID}</td>
                <td>${person.tenND}</td>
                <td>${person.diaChi}</td>
                <td>${person.Email}</td>
                <td>${person.doiTuong == 'sinhVien' ? 'Sinh Viên' : 'Sinh Viên'}</td>
                <td>${person.tinhDiemTrungBinh()}</td>
            <td>
                <button onclick="xoaDoiTuong(${person.maID})" class="btn btn-success">Xóa</button>
                <button class="btn btn-danger">Sửa</button>
            </td>
          </tr>
            `;
      }else if (person instanceof NhanVien) {
        content += 
            `
            <tr>
                <td>${person.maID}</td>
                <td>${person.tenND}</td>
                <td>${person.diaChi}</td>
                <td>${person.Email}</td>
                <td>${person.doiTuong = 'nhanVien' ? 'Nhân Viên' : 'Nhân Viên'}</td>
                <td>${person.tinhLuong()}</td>
            <td>
                <button onclick="xoaDoiTuong(${person.maID})" class="btn btn-success">Xóa</button>
                <button class="btn btn-danger">Sửa</button>
            </td>
          </tr>
            `;
      };
    };
    document.getElementById(idHienThi).innerHTML = content;
  };
  luuLocalDT = () => {
    let stringArr = JSON.stringify(this.arrListPerson);
    localStorage.setItem('arrDoiTuong', stringArr);
  };
  layLocalDT = () => {
    let arrLocal = JSON.parse(localStorage.getItem("arrDoiTuong"));
    console.log(localStorage.getItem("arrDoiTuong"))
    if (arrLocal != null) {
      for (let item of arrLocal) {
        console.log(item);
        if (item.hasOwnProperty("doiTuong") && item.doiTuong === "sinhVien") {
          let sinhVien = new SinhVien (
            item.maID,
            item.tenND,
            item.diaChi,
            item.Email,
            item.doiTuong
          );
          sinhVien.diemToan = item.diemToan;
          sinhVien.diemLy = item.diemLy;
          sinhVien.diemHoa = item.diemHoa;
          this.arrListPerson.push(sinhVien);
        } else if (
          item.hasOwnProperty("doiTuong") &&
          item.doiTuong === "nhanVien"
        ) {
          let nhanVien = new NhanVien(
            item.maID,
            item.tenND,
            item.diaChi,
            item.Email,
            item.doiTuong
          );
          nhanVien.txtLuong = item.txtLuong;
          nhanVien.txtNgayLam = item.txtNgayLam;
          this.arrListPerson.push(nhanVien);
        }
      }
      this.renderGiaoDien();
    }
    // let arrLocal = JSON.parse(localStorage.getItem('arrDoiTuong'));
    // if (arrLocal !== null){
    //   this.arrListPerson = [...(arrLocal)];
    //   this.renderGiaoDien();
    // }
  };
  xoaDoiTuong = (id) => {
    // console.log(123)/
    let index = this.arrListPerson.findIndex((item)=> {
      item.maID = id
      return item.maID === id
    });
    console.log(index);
    if (index != -1){
      console.log(index);
      this.arrListPerson.splice(index, 1);
      this.renderGiaoDien();
      this.luuLocalDT();
    }
  };
};
//export để có thể mang đi sử dụng:
export default ListPerson;