import { produce } from 'immer'


export const mystore = {
     listCategory: []
}



export const datacategoryreducer = produce((state, action) => {
     switch (action.type) {
          case "ADD_CATEGORY": { state.listCategory.push(action.payload); }
               break;
          case "DELLCATEGORY": { state.listCategory = state.listCategory.filter(x => x._id !== action.payload); }
               break;
          case "ONLOADCATEGORY": state.listCategory = action.payload
               break;
          case "CHANGFLAGE": {
               let index = state.listCategory.findIndex(x => x._id == action.payload._id)
               state.listCategory[index].isActiv = !state.listCategory[index].isActiv;
          }
               break;
          // case "UPDATE_CATEGORY":{
          //      let index=state.listCategory.findIndex(x=>x._id==action.payload._id)
          //      state.listCategory[index]=action.payload;
          //      }

          case "UPDATE_CATEGORY": {
               debugger
               // const index=state.list.findIndex(u=>u._id==action.payload._id)
               // state.list[index]==action.payload
               const index = state.listCategory.findIndex((u) => u._id === action.payload._id);

               if (index !== -1) {
                    return {
                         ...state,
                         listCategory: state.listCategory.map((item, i) =>
                              i === index ? action.payload : item
                         ),
                    };
               }
               return state;
          }
 break;

          case "SET_LISTCATEGORY": {
               debugger
               return { ...state, listCategory: action.payload, };
          }

               break;
          default:
               break;
     }
}, mystore)
