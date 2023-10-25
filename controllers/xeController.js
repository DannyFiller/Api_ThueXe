const {json} = require("body-parser");
const {Xe} = require("../model/model");
const { param } = require("../routes/xe");

const xeController = {
    //Thêm xe
    addXe: async(req,res) =>{
        try {
            const newXe = new Xe(req.body);
            const saveXe = await newXe.save();
            res.status(200).json(saveXe);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //Lấy tất cả xe
    getAllXe: async(req,res) =>{
        try{
            const xe = await Xe.find();
            res.status(200).json(xe);
        }catch (error) {
            res.status(500).json(error);
        }
    },

    //Xóa xe
    deleteXe: async(req,res)=>{
        try {
            const xe = await Xe.findByIdAndDelete(req.params.id);
            res.status(200).json(xe);
        } catch (error) {
            res.status(500).json(error);   
        }
    },

    //Lấy thông tin 1 xe !!!!!!!!!!!!!!!!!!
    getXe: async(req,res) =>{
        try {
            const idXe = req.params.tenxe;
            const xe = await Xe.findById(idXe);
            res.status(200).json(xe);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //sửa thông tin xe
    editXe:async(req,res) =>{
        try {
            const idXe = req.params.id;
            const{BienSoXe,TenXe,LoaiXe,TinhTrangXe,TangXe,DoiXe,MauXe} = req.body;
            const updateXe = await Xe.findByIdAndUpdate(idXe,{BienSoXe,TenXe,LoaiXe,TinhTrangXe,TangXe,DoiXe,MauXe},{new : true});
            res.status(200).json(updateXe);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //lấy theo loại xe!!!!!!!!!!!!!!
    getLoaiXe:async(req,res) =>{
        try{
            const{loaixe} = req.params;
            const LoaiXeTim = await Xe.find({LoaiXe : loaixe});
            res.status(200).json(LoaiXeTim);
        }catch{
            res.status(500).json(error);
        }
    }
    
}
module.exports = xeController;