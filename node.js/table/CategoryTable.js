import {model, Schema} from 'mongoose'
import { boolean } from 'webidl-conversions'

const categoryTable =Schema({
     name:String,
     isActive: { // שדה בוליאני
          type: Boolean, 
          default: false, // ברירת מחדל לערך false
        },
    
})

export default model('Category',categoryTable)



