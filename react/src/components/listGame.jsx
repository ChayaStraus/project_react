import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeflag, onloadgame, update_game } from "../redex/Action";
import { changeflagagain } from "../redex/Action";
import { dellgame } from "../redex/Action";
import { dellthegame, getAll, updateGame } from "../axios/gameaxios";

export const ListGame = () => {
    const dispach = useDispatch();

    let listG = useSelector(x => x.datagamereducer.listGame);
    const [isedit, setIsEdit] = useState(false);
    const [keyedit, setKeyEdit] = useState();
    const [saveedit, setSaveEdit] = useState(false);
    const [gameItem, setGameItem] = useState({});

    useEffect(() => {
        if (listG == null || listG.length == 0) {
            getAll().then((x) => dispach(onloadgame(x.data)))
                .catch((err) => console.log(err));
        }
    }, []);

    const saveItem = (x) => {
        setGameItem({
            _id: x._id,
            name: x.name,
            code_category: x.code_category,
            price: x.price,
            age: x.age,
            pic: x.pic,
            amount: x.amount
        });
    };

    const save = () => {
        setSaveEdit(false);
        updateGame(gameItem).then(() => {
            dispach(update_game(gameItem));
        }).catch(err => console.log(err));
        setIsEdit(false);
    };

    const todell = (id) => {
        dellthegame(id).then(() => dispach(dellgame(id)))
            .catch(err => console.log(err));
    };

   

    return <>
        <table className="table container">
            <thead>
                <tr>
                    <th>קוד</th>
                    <th>שם</th>
                    <th>קוד קטגוריה</th>
                    <th>מחיר</th>
                    <th>גיל</th>
                    <th>תמונה</th>
                    <th>כמות</th>
                    <th>אפשרויות נוספות</th>
                </tr>
            </thead>
    
            <tbody>
                {listG.map((x, i) => (
                    <tr key={i}>
                        <td>{x._id}</td>
    
                        {/* עריכת שם */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="text"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.name}
                                onBlur={(e) => setGameItem({ ...gameItem, name: e.target.value })}
                            />
                        ) : (
                            x.name
                        )}</td>
    
                        {/* עריכת קוד קטגוריה */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="text"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.code_category}
                                onBlur={(e) => setGameItem({ ...gameItem, code_category: e.target.value })}
                            />
                        ) : (
                            x.code_category
                        )}</td>
    
                        {/* עריכת מחיר */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="number"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.price}
                                onBlur={(e) => setGameItem({ ...gameItem, price: e.target.value })}
                            />
                        ) : (
                            x.price
                        )}</td>
    
                        {/* עריכת גיל */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="number"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.age}
                                onBlur={(e) => setGameItem({ ...gameItem, age: e.target.value })}
                            />
                        ) : (
                            x.age
                        )}</td>
    
                        {/* עריכת תמונה */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="text"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.pic}
                                onChange={(e) => setGameItem({ ...gameItem, pic: e.target.files[0] })}
                            />
                        ) : (
                            <img src={`http://localhost:8080/${x.pic}`} alt={x.name} style={{ width: "80px", height: "80px" }} />
                        )}</td>
    
                        {/* עריכת כמות */}
                        <td>{isedit && keyedit === i ? (
                            <input
                                type="number"
                                className="form-control form-control-sm"  // הוספת הכיתה כדי להקטין את גודל השדה
                                defaultValue={x.amount}
                                onBlur={(e) => setGameItem({ ...gameItem, amount: e.target.value })}
                            />
                        ) : (
                            x.amount
                        )}</td>
    
                        {/* כפתורי עריכה ומחיקה */}
                        <td className="d-flex align-items-center">
                        <button className="btn btn-danger btn-sm me-2" onClick={(e) => { e.preventDefault(); todell(x._id); }}>מחק</button>
                            {isedit && keyedit === i ? (
                                <button className="btn btn-success btn-sm" style={{ whiteSpace: "nowrap" }} onClick={() => { save(); }}>שמור שינויים</button>
                            ) : (
                                <button className="btn btn-warning btn-sm" onClick={(e) => {
                                    e.preventDefault();
                                    setIsEdit(true);
                                    setKeyEdit(i);
                                    saveItem(x);
                                    setSaveEdit(true);
                                }}>ערוך</button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    
};
