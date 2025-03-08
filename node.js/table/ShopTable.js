import mongoose, { model, Schema } from 'mongoose'

const ShopTable = Schema({
    codeCustomer: {
        type: mongoose.Types.ObjectId,
        ref: 'customers'
    },
    date: String,
    gameArr: [
        {
            codeGame: {
                type: mongoose.Types.ObjectId,
                ref: 'Games'
            },
            name: String,
            price: Number,
            amount: Number,
            totalprice: Number
        }
    ],
    sum: Number,
})
export default model("Shops",ShopTable)