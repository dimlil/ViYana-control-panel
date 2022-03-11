import axios from "axios";
import jsCookie from "js-cookie";

export const logout = async () => {
  axios.defaults.withCredentials = true;
  try {
    const responce = await axios.post(
      `${process.env.REACT_APP_API_URL}/logout`,
      { withCredentials: true }
    );
    if (responce.status === 200) {
      jsCookie.remove("user");
      return true
    } else {
      throw new Error(responce.data);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
