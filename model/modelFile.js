const mongoose = require('mongoose');
const { Schema } = mongoose;

//mongoose.connect('mongodb://127.0.0.1:27017/quotesdb');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.mongo_URL);
    console.log("database connected successfully");
}


//schema
//type: mongoose.Schema.Types.Decimal128
const schema = new Schema(
    {
        title : {type:String,required:true,unique:true},
        description : String,
        price: { type: Number, min: [0, 'enter valid price']},
        discountPercentage: { type: Number, min: [0, 'enter valid discount(0-5)'], max: [50, 'enter valid discount(0-5)'] },
        rating: { type:Number , min: [0, 'enter valid rating(0-5)'], max: [5, 'enter valid rating(0-5)'] },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        thumbnail: { type: String },
        images : [String]
    }
);

//model creation
exports.model = mongoose.model('product', schema);