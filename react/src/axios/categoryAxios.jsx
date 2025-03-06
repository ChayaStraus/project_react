import axios from "axios";

const url="http://localhost:8080/category"

export const getAll=()=>{
    return axios.get(`${url}/getAll`)
}

export const add=(obj)=>{
    return axios.post(`${url}/add`,obj)
}

export const deletee = (id) => {
    return axios.delete(`${url}/delete/${id}`);
};
// export const updatecategory = (obj) => {
//     return axios.put(`${url}/update/${obj._id}`,obj);
// };
export const updateCategory = (obj) => {
    return axios.put(`${url}/update/${obj._id}`, obj);
}



