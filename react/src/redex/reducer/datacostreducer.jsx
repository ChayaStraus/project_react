import { current, produce } from 'immer'


export const mystore = {
    listCust: [],
    currentCust:{}
}


export const datacostreducer = produce((state, action) => {
    switch (action.type) {
        case "GETCUST":{
            if(action.payload)
                state.currentCust=action.payload
            else
                state.currentCust=null
        }
        case "ADDCOST":state.listCust.push(action.payload)
        break;
        default:
        break;
}
},mystore)