import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const Nav = () => {
    const currentu = useSelector(x => x.datacartreducer.currentuser);

    return <div>
        <ul class="nav nav-tabs">
            {currentu.name == "מנהל" && currentu.pass == 11 && <li className="nav-item"><NavLink className="nav-link" to="myListG">רשימת המשחקים</NavLink></li>}
            {currentu.name == "מנהל" && currentu.pass == 11 && <li className="nav-item"><NavLink className="nav-link" to="myListC">רשימת הקטגוריות</NavLink></li>}
            {currentu.name == "מנהל" && currentu.pass == 11 && <li className="nav-item"><NavLink className="nav-link" to="myaddgame">הוספת משחק </NavLink></li>}
            {currentu.name == "מנהל" && currentu.pass == 11 && <li className="nav-item"><NavLink className="nav-link" to="myAddCategory">הוספת קטגוריה</NavLink></li>}

            <li className="nav-item">
                <NavLink className="nav-link" to="mylogin">התחברות</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="myhome">דף הבית</NavLink>
            </li>

            {currentu.name != "מנהל" && currentu.pass != 11 && <li className="nav-item"><NavLink className="nav-link" to="mycart">צפיה בסל </NavLink> </li>}

            {currentu.name != "מנהל" && currentu.pass!=11 &&
                <li className="nav-item">
                    <NavLink className="nav-link" to="myacount">איזור אישי</NavLink>
                </li>
            }


        </ul>
    </div>
}