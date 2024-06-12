import mongoose, { Schema } from 'mongoose';
const productSchema = new mongoose.Schema(
    {
    img:{type:String,require:true,unique:true},
    name: {type: String, require: true}, 
    price: {type: mongoose.Schema.Types.Mixed, require: true}, 
    developer: {type: String, require: true}, 
    tag:[String],
        orders:[
        {
            type:Schema.Types.ObjectId,ref:'Order'
        }
        ]
    }, 
    {timestamps: true, versionKey: false}
);
export default mongoose.model("Product", productSchema);