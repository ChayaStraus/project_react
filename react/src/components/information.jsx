import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { additemtocart, getgamebyid } from "../redex/Action"
import { useEffect } from "react"
import { getgamebyiddd } from "../axios/gameaxios"


export const Information = () => {
    const params = useParams()
    const listG = useSelector(x => x.datagamereducer.listGame)
    const obj = listG.find(x => x._id == params.id)
    const dispach = useDispatch();
    const nevigate = useNavigate();


    return <>

        <h2 className="text-center mb-4">פרטים נוספים</h2>
        <div className="container">
            <div className="card shadow-lg p-2" >
                <div className="row align-items-center g-1">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <img
                            src={`http://localhost:8080/${obj.pic}`}
                            alt={`תמונה של ${obj.name}`}
                            className="img-fluid rounded"
                            style={{ maxHeight: '350px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="col-md-8">
                        <h3>{obj.name}</h3>
                        <div>
                            <p><strong>קוד משחק:</strong> {obj._id}</p>
                            <p><strong>מחיר משחק:</strong> ₪{obj.price}</p>
                            <p><strong>טווח גילאים:</strong> {obj.age}</p>
                            <p><strong>קוד קטגוריה:</strong> {obj.code_category}</p>
                            <p><strong>כמות במלאי:</strong> {obj.amount}</p>
                        </div>

                        <button
                            className="btn btn-primary mt-3"
                            onClick={(e) => { e.preventDefault(); dispach(additemtocart(obj)); nevigate('/myhome') }}
                        >
                            הוסף לסל הקניות
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </>
}