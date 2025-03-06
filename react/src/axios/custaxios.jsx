import axios from "axios";

const url="http://localhost:8080/cust"

export const getbynameandpass=(name,password)=>{
    return axios.get(`${url}/getbynameandpass/${name}/${password}`)
}
export const addcustomer=(obj)=>{
    return axios.post(`${url}/add`,obj)
}
