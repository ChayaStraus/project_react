import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { get_by_category_id, onloadgame } from "../redex/Action";
import { getAll, getbycategoryid } from "../axios/gameaxios";
import { useEffect, useState } from "react";

export const Home = () => {

    const listG = useSelector(x => x.datagamereducer.listGame)
    const navigate = useNavigate()
    const games = useSelector((x) => x.datagamereducer.listGame);
    const currentU = useSelector(x => x.datacartreducer.currentuser)
    const [hasFetched, setHasFetched] = useState(false);
    const dispatch = useDispatch()

    const [idcategory, setidcategory] = useState("");

    useEffect(() => {
        //if (currentU.name==null &&hasFetched==false) {
        getAll()
            .then((response) => {
                dispatch(onloadgame(response.data));  // עדכון ה-Redux עם משחקים
                setHasFetched(true); // מסמן שהנתונים נטענו
            })
            .catch((err) => console.log(err));

    }, []);


    const filter = () => {
        getbycategoryid(idcategory).then(x => {
            dispatch(get_by_category_id(x.data))
        })
            .catch((err) => console.log(err))
    }


    return <>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
    <p>hhhh</p>
        <div className="container text-center my-5" style={{ fontFamily: 'Arial, sans-serif', direction: 'rtl' }}>
            <h1 className="mb-4">דף הבית - חנות משחקים</h1>
            <h2>hellow git</h2>

            <div className="input-group mb-4 w-50 mx-auto">
                <input type="text" className="form-control rounded-start" placeholder="הכנס קוד קטגוריה"
                    onBlur={(x) => { x.preventDefault(); setidcategory(x.target.value); }}
                />
                <button className="btn btn-secondary rounded" onClick={() => { filter(); }}
                    style={{ backgroundColor: '#D3D3D3', borderColor: '#D3D3D3' }}
                >חיפוש
                    {/* <img src="https://img.icons8.com/ios/452/search.png" alt="search"
                        style={{ width: '20px', height: '20px' }}
                    /> */}
                </button>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                {listG.map((listG) => (
                    <div className="col" key={listG.id}>
                        <div className="card h-100 shadow-sm border-light rounded">
                            <div className="d-flex justify-content-center">
                                <img src={`http://localhost:8080/${listG.pic}`} alt={listG.name} className="card-img-top rounded-top"
                                    style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'cover' }}  // הגבלת גובה ורוחב התמונה
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{listG.name}</h5>
                                <p className="card-text">מחיר: {listG.price}</p>
                                <button
                                    className="btn btn-primary mt-auto rounded"
                                    onClick={() => navigate(`../myinformation/${listG._id}`)}
                                >
                                    פרטים נוספים
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>


}