import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getshopsbycust } from "../redex/Action";
import { getshopbyidcust } from "../axios/shopaxios";

export const Myacount = () => {
    const user = useSelector(x => x.datacostreducer.currentCust); // נתוני המשתמש המחובר
    const nevigate = useNavigate();
    const listshopuser = useSelector((x) => x.datacostreducerr.listShoping || []); // רשימת הקניות
    const dispach = useDispatch();
    const [flag, setflag] = useState(true);

    useEffect(() => {
        if (user.name != null && (listshopuser == null || listshopuser.length === 0)) {
            setflag(true);
            getshopbyidcust(user._id).then((x) => {
                dispach(getshopsbycust(x.data));
                setflag(false);
            })
                .catch((err) => alert(`Error fetching data: ${err.message}`));
        }
        else {
            setflag(false);
        }
    }, []);

    if (flag) {
        return <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">טוען נתונים...</span>
                </div>
            </div>
            </>
    }
    else {
        return <>
            <>
                {user.name == null && (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="card text-center shadow-lg" style={{ maxWidth: "400px" }}>
                            <div className="card-body">
                                <h5 className="card-title text-danger">אינך מחובר</h5>
                                <p className="card-text">
                                    עליך להתחבר על מנת לגשת לאזור האישי שלך.
                                </p>
                                <Link to={"/mylogin"} className="btn btn-primary">
                                    התחבר כאן
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {user.name != null && (
                    <div className="container mt-5">
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover text-center">
                                <thead className="table-dark">
                                    <tr>
                                        <th>קוד קניה</th>
                                        <th>תאריך</th>
                                        <th>סכום הקניה</th>
                                        <th>אפשרויות נוספות</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listshopuser.map((x, i) => (
                                        <tr key={i}>
                                            <td>{x._id}</td>
                                            <td>{x.date}</td>
                                            <td>{x.sum}</td>
                                            <td>
                                                <button className="btn btn-info btn-sm" onClick={() => nevigate(`../mydetailshop/${x._id}`)}>
                                                    פרטים נוספים
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {user.name != null && listshopuser && listshopuser.length === 0 && (
                    <p className="text-center mt-4">אין רכישות להצגה</p>
                )}
            </>
            </>
    }
};

