const mongoose = require("mongoose");

const xeSchema = new mongoose.Schema({
    BienSoXe: {
        type : String,
    },
    TenXe :{
        type : String,
    },
    LoaiXe :{
        type : String,
    },
    TinhTrangXe :{
        type : String,
    },
    GiaXe : {
        type: Number,
    },
    HangXe :{
        type : String,
    },
    DoiXe :{
        type : String,
    },
    MauXe : {
        type: String,
    },
});

const taiKhoanSchema = new mongoose.Schema({
    TenTaiKhoan:{
        type:String,
    },
    MatKhau:{
        type:String,
    },
    Ten:{
        type:String,
    },
    GioiTinh:{
        type:Boolean,
    },
    DiaChi:{
        type:String,
    },
    SoDienThoai:{
        type:String,
    },
    Cccd:{
        type:String,
    },
    BangLaiXe:{
        type:String,
    },
});

const soDatXeSchema = new mongoose.Schema({
    MaSo:{
        type:String,
    },
    BienSoXe:{
        type:String,
    },
    TenTaiKhoan:{
        type:String,
    },
    NgayThueXe:{
        type:String,
    },
    NgayTraXe:{
        type:String
    },
    GiaThueXe:{
        type:Number,
    }
});


let Xe = mongoose.model("Xe",xeSchema);
let SoDatXe = mongoose.model("SoDatXe",soDatXeSchema);
let TaiKhoan = mongoose.model("TaiKhoan",taiKhoanSchema);

module.exports = {Xe,SoDatXe,TaiKhoan};