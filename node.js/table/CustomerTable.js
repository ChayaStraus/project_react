import {model, Schema} from 'mongoose'

const customerTable =Schema({
    name:String,
    password:String,
    creditCard:{
        number:String,
        lastDate:String,
        cvv:String
    }
})

export default model('customers',customerTable)