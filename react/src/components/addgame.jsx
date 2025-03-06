import { useDispatch } from "react-redux";
import { addgame, onloadgame } from "../redex/Action";
import { useState } from "react";
import { addgamee } from "../axios/gameaxios";
import { getAll } from "../axios/categoryAxios";

export const Addgame = () => {
    const dispach = useDispatch();
    const [newg,setnewg]=useState({})


    const addnewgame=()=>{
        addgamee(newg).then(x=>
            dispach(addgame(x.data)))
                .catch((err)=>console.log(err)) 
    }
  
  

    
    

    return <><h2>הוספת משחק</h2>
        <div>
            <form>
                <div className="container">

                    <div>
                        <input type="text" placeholder=" שם משחק" onBlur={(e) => { setnewg({ ...newg, name: e.target.value }); }} className="form-control" />
                    </div>

                    <div>
                        <input type="text" placeholder=" קוד קטגוריה" onBlur={(e) => {setnewg({ ...newg, code_category: e.target.value }); }} className="form-control"/>
                    </div>

                    <div>
                        <input type="number" placeholder=" מחיר" onBlur={(e) => {setnewg({ ...newg, price: e.target.value }); }} className="form-control"/>
                    </div>

                    <div>
                        <input type="number" placeholder=" גיל" onBlur={(e) => {setnewg({ ...newg, age: e.target.value }); }} className="form-control"/>
                    </div>

                    <div>
                        <input type="text" placeholder=" ניתוב תמונה" onBlur={(e) => {setnewg({ ...newg, pic: e.target.value }); }} className="form-control"/>
                    </div>

                    <div>
                        <input type="number" placeholder=" כמות המלאי" onBlur={(e) => {setnewg({ ...newg, amount: e.target.value }); }} className="form-control"/>
                    </div>

                    <button type="submit" onClick={(e) => {e.preventDefault();addnewgame();}} className="btn btn-primary" >
                        הוסף
                    </button>
                </div>
            </form>
            <style>
                {`
                    .container {
                        max-width: 400px;
                        margin: 50px auto;
                        padding: 20px 30px;
                        background-color: #ffffff;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                        text-align: center;
                    }
                    h2 {
                        font-size: 24px;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    .form-control {
                        width: 100%;
                        padding: 10px;
                        margin: 10px 0;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .form-control:focus {
                        border-color: #007bff;
                        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
                    }
                    .alert-danger {
                        color: #721c24;
                        background-color: #f8d7da;
                        border-color: #f5c6cb;
                        padding: 10px;
                        margin: 10px 0;
                        border-radius: 5px;
                    }
                    .btn-primary {
                        background-color: #007bff;
                        color: white;
                        padding: 10px 15px;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }
                    .btn-primary:hover {
                        background-color: #0056b3;
                    }
                    .btn-primary:focus {
                        outline: none;
                        box-shadow: 0 0 5px rgba(0, 91, 179, 0.5);
                    }
                `}
            </style>
        </div>


    </>
}