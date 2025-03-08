import mongoose, {model, Schema} from 'mongoose'

const gameTable=Schema({
    
    name:String,
    code_category:{
        type:mongoose.Types.ObjectId,
        ref:'Category'
    },
    price:Number,
    age:Number,
    pic:String,
    amount:Number
})
export default model('Games',gameTable)