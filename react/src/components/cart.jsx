import { useDispatch, useSelector } from "react-redux"
import { add_shop, dellcategory, dellitem, editsumcartless, editsumcartmore } from "../redex/Action";
import { useNavigate } from "react-router-dom";
import { addshop } from "../axios/shopaxios";
import { useState } from "react";

export const Cart = () => {

    const listcart = useSelector(x => x.datacartreducer.listcart)
    const dispach = useDispatch();
    const user=useSelector(x=>x.datacostreducer.currentCust)
    const nevigate=useNavigate()
    const [newshop,setnewshop]=useState({})

    const TodayDate = () => {
        const today = new Date(); // יוצרת אובייקט Date של התאריך הנוכחי
        const formattedDate = today.toLocaleDateString(); // הופכת את התאריך לפורמט קריא
        return (formattedDate);
    }

            
    const f = () => {
        if  (!user || !user.name) {
            alert("אינך מחובר, התחבר")
            nevigate("/mylogin")
        }
        else {

            const gamesArray = listcart.map((game) => ({
                codeGame: game._id,
                nameGame: game.name,
                price: game.price,
                amount: game.sum,
                totalprice: game.price * game.sum
            }));

            const totalSum = gamesArray.reduce((sum, game) => sum + game.totalprice, 0);

            const shopObject = {
                codeCustomer: user._id,
                date: TodayDate(),
                gameArr: gamesArray,
                sum: totalSum
            };
            return shopObject;
        }
    }

    const check = async () => {
        const obj = f(); // יצירת אובייקט הקנייה
        if (obj) {
            try {
                const response = await addshop(obj); // קריאה לאקסיוס
                dispach(add_shop(response.data)); // עדכון הסטור
                if (!user || !user.name){
                    alert("אינך מחובר- התחבר")
                    nevigate('/mylogin')
                }
                else
                    nevigate("/myendshop"); // ניווט לאחר הצלחה
            } catch (err) {
                console.log(err.message)
            }
        }
    }



    return <>


<>
    <h2 className="text-center my-4">סל הקניות שלי</h2>

    <div className="container">
      <table className="table table-striped table-bordered table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>קוד</th>
            <th>שם</th>
            <th>מחיר</th>
            <th>תמונה</th>
            <th>גיל</th>
            <th>קוד קטגוריה</th>
            <th>כמות</th>
            <th>אפשרויות נוספות</th>
          </tr>
        </thead>
        <tbody>
          {listcart.map((x, i) => (
            <tr key={i}>
              <td>{x._id}</td>
              <td>{x.name}</td>
              <td>₪{x.price}</td>
              <td>
                <img
                  src={`http://localhost:8080/${x.pic}`}
                  alt={x.name}
                  className="img-fluid"
                  style={{ maxWidth: '80px', height: 'auto' }}
                />
              </td>
              <td>{x.age}</td>
              <td>{x.code_category}</td>
              <td className="d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={(e) => { e.preventDefault(); dispach(editsumcartmore(x._id)) }}
                >
                  +
                </button>
                {x.sum}
                <button
                  className="btn btn-sm btn-outline-secondary ms-2"
                  onClick={(e) => { e.preventDefault(); dispach(editsumcartless(x._id)) }}
                >
                  -
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => { e.preventDefault(); dispach(dellitem(x._id)) }}
                >
                  מחק
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-success mt-4"
          onClick={() => { check() }}
        >
          סיום קניה
        </button>
      </div>
    </div>
  </>

    </>


}