
import mongoose, { Schema } from 'mongoose';
const invoiceSchema = new mongoose.Schema(
    {
        products:[
            {
                idProduct:{
                    type:Schema.Types.ObjectId,
                    ref:'Product'
                },
                quantity:{
                    type:Number,
                    default:0
                },
                price:{
                    type:Number,
                    default:0
                }
            }
        ],
        totalPrice:{
            type:Number,
            default:0
        },      
    }, 
    {timestamps: true, versionKey: false}
);
export default mongoose.model("Invoice",invoiceSchema);