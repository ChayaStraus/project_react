import axios from "axios";

const url="http://localhost:8080/game"

export const getAll=()=>{
    return axios.get(`${url}/getAll`)
}

export const addgamee=(obj)=>{
    return axios.post(`${url}/add`,obj)
}

export const dellthegame=(id)=>{
return axios.delete(`${url}/delete/${id}`)
}

export const updateGame = (game) => {
    return axios.put(`${url}/update/${game._id}`, game);
};

export const getbycategoryid=(id)=>{
    return axios.get(`${url}/getbycategoryid/${id}`)
}
