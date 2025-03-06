import axios from "axios";

const url="http://localhost:8080/shop"

export const addshop=(obj)=>{
    return axios.post(`${url}/add`,obj)
}
// export const getbyid=(id)=>{
//     return axios.get(`${url}/getbyid/${id}`)
// }


export const getbyid = async (id) => {
    try {
      const response = await axios.get(`${url}/getbyid/${id}`); // שנה את ה-URL לפי הצורך
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // זרוק את השגיאה אם היא מתרחשת
    }
  };

  export const getshopbyidcust=(id)=>{
    return axios.get(`${url}/getbyid/${id}`)
    }
    
