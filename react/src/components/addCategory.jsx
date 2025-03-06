import { useState } from "react"
import { useDispatch } from "react-redux"
import { add_Category, onloadcatregory } from "../redex/Action"
import { add, getAll } from "../axios/categoryAxios"


export const AddCategory = () => {

    const dispach = useDispatch()



    const additem = () => {
        add(newC).then(x =>
            dispach(add_Category(x.data)))
            .catch((err) => console.log(err))
    }


    const [myexeption, setmyexeption] = useState({ name: true })

    const checkName = (e) => {

        let nameC = e.target.value
        let notvalid = !nameC.match("[^.][א-ת]{1}")

        if (nameC == "")
            setmyexeption({ ...myexeption, name: "שדה חובה" })
        else if (notvalid)
            setmyexeption({ ...myexeption, name: "שם קטגוריה מכילה אותיות בעברית בלבד" })
        else
            setmyexeption({ ...myexeption, name: true })
    }
    const [newC, setnewC] = useState({})


    return <div  >

        <form>
            <div className=" container" >
                <h2>הוספת קטגוריה</h2>

                <div ><input type="text" placeholder="הכנס שם קטגוריה" onBlur={(e) => { checkName(e); setnewC({ ...newC, name: e.target.value }) }}></input></div>
                {myexeption.name != true && <p className="alert alert-danger">{myexeption.name}</p>}
                {/* <div ><input type="text" placeholder="הכנס קוד קטגוריה" onBlur={(e)=>{setnewC({...newC,code:e.target.value})}} ></input></div> */}

                <button type="submit" onClick={(e) => { e.preventDefault(); additem(); }}>הוסף</button>
            </div>
        </form>
    </div>
    // return 
    //  <div>
    //     <form>
    //         <div className="container">
    //             <h2>הוספת קטגוריה</h2>
    //             <div>
    //                 <input
    //                     type="text"
    //                     placeholder="הכנס שם קטגוריה"
    //                     onBlur={(e) => {
    //                         checkName(e);
    //                         setnewC({ ...newC, name: e.target.value });
    //                     }}
    //                     className="form-control"
    //                 />
    //             </div>
    //             {myexeption.name !== true && (
    //                 <p className="alert alert-danger">{myexeption.name}</p>
    //             )}
    //             <div>
    //                 <input
    //                     type="text"
    //                     placeholder="הכנס קוד קטגוריה"
    //                     onBlur={(e) => {
    //                         setnewC({ ...newC, code: e.target.value });
    //                     }}
    //                     className="form-control"
    //                 />
    //             </div>
    //             <button
    //                 type="submit"
    //                 onClick={(e) => {
    //                     e.preventDefault();
    //                     dispach(add_Category(newC));
    //                 }}
    //                 className="btn btn-primary"
    //             >
    //                 הוסף
    //             </button>
    //         </div>
    //     </form>
    //     <style>
    //         {`
    //             .container {
    //                 max-width: 400px;
    //                 margin: 50px auto;
    //                 padding: 20px 30px;
    //                 background-color: #ffffff;
    //                 border-radius: 10px;
    //                 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    //                 text-align: center;
    //             }
    //             h2 {
    //                 font-size: 24px;
    //                 color: #333;
    //                 margin-bottom: 20px;
    //             }
    //             .form-control {
    //                 width: 100%;
    //                 padding: 10px;
    //                 margin: 10px 0;
    //                 border: 1px solid #ccc;
    //                 border-radius: 5px;
    //                 font-size: 16px;
    //             }
    //             .form-control:focus {
    //                 border-color: #007bff;
    //                 box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    //             }
    //             .alert-danger {
    //                 color: #721c24;
    //                 background-color: #f8d7da;
    //                 border-color: #f5c6cb;
    //                 padding: 10px;
    //                 margin: 10px 0;
    //                 border-radius: 5px;
    //             }
    //             .btn-primary {
    //                 background-color: #007bff;
    //                 color: white;
    //                 padding: 10px 15px;
    //                 border: none;
    //                 border-radius: 5px;
    //                 font-size: 16px;
    //                 cursor: pointer;
    //                 transition: background-color 0.3s ease;
    //             }
    //             .btn-primary:hover {
    //                 background-color: #0056b3;
    //             }
    //             .btn-primary:focus {
    //                 outline: none;
    //                 box-shadow: 0 0 5px rgba(0, 91, 179, 0.5);
    //             }
    //         `}
    //     </style>
    // </div>
}