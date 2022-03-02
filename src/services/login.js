import axios from "axios";
import env from "react-dotenv";

export const login=async (email,password)=>{
    try {
        const responce = await axios.post(`${env.API_URL}/login`, {
          email,
          password,
        },{withCredentials:true});
        console.log(responce);
        return true
      } catch (error) {
        console.log(error);
        return false
      }
}