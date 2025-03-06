import { produce } from 'immer';


export const mystore = {
    currentuser: {},
    listcart: [],

}

export const datacartreducer = produce((state, action) => {
    switch (action.type) {
        // case "ADDITEMTOCART":{state.listcart.push(actio n.payload);}

        case "ADDTOCART": {
            // חיפוש אם המשחק כבר קיים בסל
            let index = state.listcart.findIndex(item => item._id === action.payload._id);
         
            if (index >= 0)
                // אם המשחק כבר בסל, עדכון כמות
                state.listcart[index].sum += 1;
            else
                // אם המשחק לא בסל, הוספה עם כמות התחלתית 1
                state.listcart.push({ ...action.payload, sum: 1 });
        }
            break;
        case "SETCURRENTUSER": { state.currentuser = action.payload }
            break;
        case "DELLITEM": { state.listcart = state.listcart.filter(x => x._id !== action.payload) }
            break;
        case "EDITSUMCARTMORE":{
            let index    = state.listcart.findIndex(x => x._id === action.payload);
            state.listcart[index].sum += 1;
        }
        break;
        case "EDITSUMCARTLESS":{
            let index = state.listcart.findIndex(x => x._id === action.payload);
            if(state.listcart[index].sum>1)
            state.listcart[index].sum -= 1;
        }
       break;
        default:
            break;
    }
}, mystore)