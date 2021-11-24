
const {Schema, model}= require('mongoose');


const orderSchema = Schema({
    userId: Schema.Types.ObjectId,
    ingredients: [{type: {type:String}, amount:Number}],
    costomer:{
        deliveryAddress:String,
        phone:String,
        paymentType:String,
    },
    price: Number,
    orderTiem:{type:Date, default:Date.now}
});

module.exports.Order=model('order', orderSchema);