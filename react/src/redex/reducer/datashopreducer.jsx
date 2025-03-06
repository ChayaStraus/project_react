import { produce } from 'immer'


export const mystore = {
     listShoping: [ 
        //{
    //     "_id": "676d8307489ea94d8e806d13",
    //     "codeCustomer": "676aaa30a0b60818e0f88f45",
    //     "date": "26.12.2024",
    //     "gameArr": [
    //         {
    //             "codeGame": "676d3045818934ba90cdd28b",
    //             "nameGame": "רמי",
    //             "price": 100,
    //             "amount": 1,
    //             "totalprice": 100,
    //             "_id": "676d8307489ea94d8e806d14"
    //         },
    //         {
    //             "codeGame": "676d324df02504cfe43ce470",
    //             "nameGame": "למה כובע?",
    //             "price": 50,
    //             "amount": 2,
    //             "totalprice": 100,
    //             "_id": "676d8307489ea94d8e806d15"
    //         },
    //         {
    //             "codeGame": "676d32ddf02504cfe43ce476",
    //             "nameGame": "גונגל ספיד",
    //             "price": 55,
    //             "amount": 1,
    //             "totalprice": 55,
    //             "_id": "676d8307489ea94d8e806d16"
    //         }
    //     ],
    //     "sum": 255,
    //     "__v": 0
    // },
    // {
    //     "_id": "676dbdd4489ea94d8e806d5b",
    //     "codeCustomer": "676aaa30a0b60818e0f88f45",
    //     "date": "26.12.2024",
    //     "gameArr": [
    //         {
    //             "codeGame": "676d324df02504cfe43ce470",
    //             "nameGame": "למה כובע?",
    //             "price": 50,
    //             "amount": 2,
    //             "totalprice": 100,
    //             "_id": "676dbdd4489ea94d8e806d5c"
    //         },
    //         {
    //             "codeGame": "676d3311f02504cfe43ce47b",
    //             "nameGame": "מונופול צעיר",
    //             "price": 85,
    //             "amount": 1,
    //             "totalprice": 85,
    //             "_id": "676dbdd4489ea94d8e806d5d"
    //         }
    //     ],
    //     "sum": 185,
    //     "__v": 0
    // },
    // {
    //     "_id": "676ddfc8489ea94d8e806d73",
    //     "codeCustomer": "676aaa30a0b60818e0f88f45",
    //     "date": "27.12.2024",
    //     "gameArr": [
    //         {
    //             "codeGame": "676d3045818934ba90cdd28b",
    //             "nameGame": "רמי",
    //             "price": 100,
    //             "amount": 2,
    //             "totalprice": 200,
    //             "_id": "676ddfc8489ea94d8e806d74"
    //         },
    //         {
    //             "codeGame": "676d324df02504cfe43ce470",
    //             "nameGame": "למה כובע?",
    //             "price": 50,
    //             "amount": 1,
    //             "totalprice": 50,
    //             "_id": "676ddfc8489ea94d8e806d75"
    //         }
    //     ],
    //     "sum": 250,
    //     "__v": 0
    // },
    // {
    //     "_id": "6771da88576b24d8d94ae2b2",
    //     "codeCustomer": "676aaa30a0b60818e0f88f45",
    //     "date": "30.12.2024",
    //     "gameArr": [
    //         {
    //             "codeGame": "676d3045818934ba90cdd28b",
    //             "price": 100,
    //             "amount": 1,
    //             "totalprice": 100,
    //             "_id": "6771da88576b24d8d94ae2b3"
    //         }
    //     ],
    //     "sum": 100,
    //     "__v": 0
    // }
    ]
}

export const datacostreducerr = produce((state, action) => {
    switch (action.type) {
        case "ADD_SHOP": {state.listShoping.push(action.payload)}
            break;
        // case "GET_SHOP_BY_COST":state.listShoping=state.listShoping.filter(x=>x.codeCustomer==action.payload)
        //     case "GET_SHOP_BY_ID":
        //   {  state.listShoping = action.payload;} // תן פשוט ל-state לקבל את המערך המתקבל
        // case "GET_SHOP_BY_ID":{
        //      state.listShoping = action.payload||[];
        //     } // עדכון הרשימה במערך
        //     break;
            case "GETSHOPBYCUST": { state.listShoping = action.payload||[]}
            break;
        default:
            break;
    }
}, mystore)

