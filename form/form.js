// import nhanVien from "../models/NhanVien";
// import sinhVien from "../models/sinhVien";

let seLec = document.getElementById("doiTuong");
// console.log(seLec);
let formDiem = document.getElementById('formDiem');
let formLuong = document.getElementById('formLuong');
seLec.addEventListener('change', ()=>{
    if (seLec.value === 'sinhVien'){
        formDiem.style.display = "inline-block";
        formLuong.style.display = "none";
    }else if (seLec.value === 'nhanVien') {
        formLuong.style.display = "inline-block";
        formDiem.style.display = "none";
    }else {
        formDiem.style.display = "none";
        formLuong.style.display = "none";
    }
});


