import coupon from '../models/couponSchema'
import details from '../models/detailModel'

export const addCoupon = async (req,res) =>{
    const {
        code,
        discountType,
        discountAmount,
        expirationDate
    }=req.body;


    const newCoupon = new coupon({
        

    })
}