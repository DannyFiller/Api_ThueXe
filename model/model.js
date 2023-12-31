const mongoose=require("mongoose");

const XeSchema=new mongoose.Schema(
    {
    BienSoXe:{
        type:String,
        required:true
    },
    TenXe:{
        type:String,
        required:true
    },
    LoaiXe:{
        type:String,
        required:true
    },
    TinhTrangXe:{
        type:String
    },
    GiaThue:{
        type:Number,
        required:true
    },
    HangXe:{
        type:String
    },
    DoiXe:{
        type:String
    },
    MauXe:{
        type:String
    },
    HinhAnh:{
        type:String
    }
})
const KhachHangSchema=new mongoose.Schema({
    TenTaiKhoan:{
        type:String,
        required:true
    },
    MatKhau:{
        type:String,
        required:true
    },
    Ten:{
        type:String,
        required:true
    },
    GioiTinh:{
        type:Boolean,
        required:true
    },
    DiaChi:{
        type:String,
        required:true
    },
    SoDienThoai:{
        type:String,
        required:true
    },
    CCCD:{
        type:String,
        required:true
    },
    BangLaiXe:{
        type:String
    }
})
const SoXeSchema=new mongoose.Schema({
    KhachHang:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"KhachHang"
    },
    Xe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Xe"
    },
    NgayThueXe:{
        type:Date,
        required:true
    },
    NgayTraXe:{
        type:Date,
        required:true
    },
    GiaThue:{
        type:Number
    },
    NgayKiHopDong:{
        type:Date,
        required:true
    },
    TinhTrang:{
        type:String,
        required:true

    },
})
const QuanLiSchema=new mongoose.Schema({
    TenTaiKhoan:{
        type:String,
        required:true
    },
    MatKhau:{
        type:String,
        required:true
    },
    Ten:{
        type:String,
        required:true
    },
    GioiTinh:{
        type:Boolean,
        required:true
    },
    DiaChi:{
        type:String,
        required:true
    },
    SoDienThoai:{
        type:String,
        required:true
    },
    CCCD:{
        type:String,
        required:true
    },
    BangLaiXe:{
        type:String
    }
})

const SoDatXeSchema=new mongoose.Schema({
    KhachHang:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"KhachHang"
    },
    Xe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Xe"
    },
    NgayThueXe:{
        type:Date,
        required:true
    },
    NgayTraXe:{
        type:Date,
        required:true
    },
    GiaThue:{
        type:Number
    },
    NgayKiHopDong:{
        type:Date,
        required:true
    },
    TinhTrang:{
        type:String,
        required:true

    },
})
let QuanLi=mongoose.model("QuanLi",QuanLiSchema);
let Xe=mongoose.model("Xe",XeSchema);
let KhachHang=mongoose.model("KhachHang",KhachHangSchema);
let SoXe=mongoose.model("SoXe",SoXeSchema);
let SoDatXe=mongoose.model("SoDatXe",SoDatXeSchema);
module.exports={Xe,QuanLi,KhachHang,SoXe,SoDatXe};