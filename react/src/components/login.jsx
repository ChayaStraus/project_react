import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getcust, setcurrentuser } from "../redex/Action";
import { Link, useNavigate } from "react-router-dom";
import { getbynameandpass } from "../axios/custaxios";




export const Login = () => {

    const dispach = useDispatch();

    const [user, setuser] = useState({});
    const nevigate = useNavigate();

    const check = async () => {
        try { 
            const response = await getbynameandpass(user.name, user.pass);
            if (response.data) {
                dispach(getcust(response.data));
                alert("התחברת בהצלחה!!");
                nevigate('/myhome');
            } else {
                alert("משתמש חדש?,הירשם")
                nevigate('/myregester');
            }
            
        } catch (err) {
            alert("fcvgbhnjmk");
            console.log(err);
            
        }
    }

return<>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-primary" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
          טופס התחברות
        </h2>
        <form onSubmit={(e) => { e.preventDefault(); dispach(setcurrentuser(user)); check(); }}>
          <div className="mb-3">
            <input className="form-control" type="text"placeholder="שם"
              onBlur={(e) => setuser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <input className="form-control" type="password" placeholder="סיסמה"
              onBlur={(e) => setuser({ ...user, pass: e.target.value })}
              required
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              התחבר
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <p>משתמש חדש? <Link to="/myregester">הירשם עכשיו</Link></p>
        </div>
      </div>
    </div>

    </>
}