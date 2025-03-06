import { useState } from "react"
import { useDispatch } from "react-redux"
import { addcustomer, getbynameandpass } from "../axios/custaxios";
import { addcust, getcust } from "../redex/Action";
import { Link, useNavigate } from "react-router-dom";

export const Regester = () => {

    const [newcost, setnewcost] = useState({})
    const dispach = useDispatch();
    const nevigate = useNavigate();
    const [myexeption1, setmyexeption1] = useState({ name: true })
    const [myexeption2, setmyexeption2] = useState({ name: true })
    const [myexeption3, setmyexeption3] = useState({ name: true })

    //בדיקת תקינות מספר אשראי
    const checkNumber = (e) => {
        let creditcardnumber = e.target.value
        let notvalid = !/^\d{16}$/.test(creditcardnumber);
        if (creditcardnumber === "")
            setmyexeption1({ ...myexeption1, name: " * שדה חובה" })
        else if (notvalid)
            setmyexeption1({ ...myexeption1, name: "מספר אשרי צריך להכיל 16 ספרות בדיוק" })
        else
            setmyexeption1({ ...myexeption1, name: true })
    }
//בדיקת תקינות תוקף
    const checkdate = (input) => {
        const date = input.target.value
        const today = new Date(); // תאריך נוכחי
        const currentMonth = today.getMonth() + 1; // חודשים ב-JS מתחילים מ-0
        const currentYear = today.getFullYear() % 100; // 2 ספרות של השנה הנוכחית
    
        const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/; 
        const match = date.match(regex);
        let year;
        let month;
        
        if (match !== null) {
            month = parseInt(match[1], 10); // המרת חודש למספר
            year = parseInt(match[2], 10); // המרת שנה למספר
        }
    
        if (date === "")
            setmyexeption2({ ...myexeption2, name: "* שדה חובה" })
        else if (match === null) 
            setmyexeption2({ ...myexeption2, name: "תאריך לא תקין. הפורמט צריך להיות MM/YY." })
        else if (match !== null && (year < currentYear || (year === currentYear && month <= currentMonth))) 
            setmyexeption2({ ...myexeption2, name: "התאריך צריך להיות מתאריך נוכחי ומעלה.." })
        else
            setmyexeption2({ ...myexeption2, name: true })
    };

    //בדיקת תקינות 3 ספרות
    const checkcvv = (e) => {
        let creditcardnumber = e.target.value
        let notvalid = !/^\d{3}$/.test(creditcardnumber);
        if (creditcardnumber === "")
            setmyexeption3({ ...myexeption3, name: "* שדה חובה" })
        else if (notvalid)
            setmyexeption3({ ...myexeption3, name: "CVV צריך להכיל 3 ספרות בלבד" })
        else
            setmyexeption3({ ...myexeption3, name: true })
    }

    const check = async () => {
        try { 
            const response = await getbynameandpass(newcost.name, newcost.password);
            if (response.data.name !== null && response.data.password !== null) {
                alert("אתה רשום כבר במערכת,התחבר")
                nevigate('/mylogin')
            } else {
                addcustomer(newcost).then(x => dispach(addcust(x)))
                .catch((err) => console.log(err))
                alert("נרשמת בהצלחה, תתחבר")
                nevigate('/mylogin')
            }
                
        } catch (err) {
            alert("שגיאה, נסה שוב מאוחר יותר.");
            console.log(err);
        }
    }

    return <>
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
          <div className="card shadow-lg p-3" style={{ width: "100%", maxWidth: "350px" }}>
            <h2 className="text-center mb-3 text-primary" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
              טופס הרשמה
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); check(); }}>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control" type="text"placeholder="הכנס שם"
                  onBlur={(x) => setnewcost({ ...newcost, name: x.target.value })}
                  required
                />
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control" type="password" placeholder="הכנס סיסמא"
                  onBlur={(x) => setnewcost({ ...newcost, password: x.target.value })}
                  required
                />
              </div>
              <h5 className="mb-2" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>פרטי אשראי</h5>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control" type="text" placeholder="הכנס מספר אשראי"
                  onBlur={(x) => { x.preventDefault(); checkNumber(x); setnewcost({ ...newcost, creditCard: { ...newcost.creditCard, number: x.target.value } }) }}
                />
                {myexeption1.name !== true && <div className="text-danger">{myexeption1.name}</div>}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control" type="text" placeholder="הכנס תוקף (MM/YY)"
                  onBlur={(x) => { x.preventDefault(); checkdate(x); setnewcost({ ...newcost, creditCard: { ...newcost.creditCard, lastDate: x.target.value } }) }}
                />
                {myexeption2.name !== true && <div className="text-danger">{myexeption2.name}</div>}
              </div>
              <div className="mb-2">
                <label className="form-label"></label>
                <input
                  className="form-control" type="text" placeholder="הכנס 3 ספרות אחרונות"
                  onBlur={(x) => { x.preventDefault(); checkcvv(x); setnewcost({ ...newcost, creditCard: { ...newcost.creditCard, cvv: x.target.value } }) }}
                />
                {myexeption3.name !== true && <div className="text-danger">{myexeption3.name}</div>}
              </div>
              <div className="d-grid mt-2">
                <button className="btn btn-primary" type="submit">
                  הירשם
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <p>כבר רשום? <Link to="/mylogin">התחבר עכשיו</Link></p>
            </div>
          </div>
        </div>
        </>
      
    
}
