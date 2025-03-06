import { useDispatch, useSelector } from "react-redux"
import { dellcategory, onloadcatregory, changflage, update_category, set_listCategory } from "../redex/Action";
import { useEffect, useState } from "react";
import { deletee, getAll, updateCategory, updatecategory } from "../axios/categoryAxios";

export const ListCategory = () => {

    let listC = useSelector(x => x.datacategoryreducer.listCategory)

    const dispach = useDispatch();
    const [item, setitem] = useState({})
    const [isedit, setidedit] = useState(false)
    const [keyedit, setkeyedit] = useState()
    const [saveedit, setsaveedit] = useState(false)

    const [flagedit,setflagedit]=useState(true)

    const saveitem = (x) => {
        setitem({ _id: x._id, name: x.name })
    }

    const save = () => {

        setsaveedit(false)
        updateCategory(item)
        dispach(update_category(item));
        setidedit(false)
    }

    const dellitem = (id) => {
        deletee(id).then(() => dispach(dellcategory(id)))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        if (listC == null || listC.length == 0) {
            getAll().then((x) =>{
            dispach(set_listCategory(x.data))
        })
                .catch((err) => { alert("ffffff");console.log(err)})
        }
    }, [])

    return <>
        <table className="table container">
            <thead>
                <tr>
                    <th>קוד</th>
                    <th>שם</th>
                    <th>אפשרויות נוספות</th>
                </tr>
            </thead>
    
            <tbody>
                {listC.map((x, i) => (
                    <tr key={i}>
                        <td>{x._id}</td>
                        {isedit && keyedit == i ? (
                            <td>
                                <input
                                    className="form-control form-control-sm" // הוספת הכיתה כדי להקטין את גודל השדה
                                    defaultValue={x.name}
                                    onBlur={(e) => {
                                        if (e.target.value) setitem({ ...item, name: e.target.value });
                                    }}
                                />
                            </td>
                        ) : (
                            <td>{x.name}</td>
                        )}
                        <td className="d-flex flex-column justify-content-center align-items-center">
                            <button
                                className="btn btn-danger btn-sm me-2 mb-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dellitem(x._id);
                                }}
                            >
                                מחק
                            </button>
                            {flagedit && (
                                <button
                                    className="btn btn-warning btn-sm me-2 mb-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setidedit(true);
                                        setkeyedit(i);
                                        setsaveedit(true);
                                        saveitem(x);
                                        setflagedit(false);
                                    }}
                                >
                                    ערוך
                                </button>
                            )}
                            {!flagedit && saveedit && keyedit == i && (
                                <button
                                    className="btn btn-success btn-sm"
                                    onClick={() => {
                                        save();
                                        setflagedit(true);
                                    }}
                                >
                                    שמור שינויים
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    
}

