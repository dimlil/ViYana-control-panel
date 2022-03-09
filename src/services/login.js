import axios from "axios";
import jsCookie from "js-cookie";

export const login = async (email, password) => {
  try {
    const responce = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email,
        password,
      },
      { withCredentials: true }
    );
    const user = responce.data.split(" ")[1];
    jsCookie.set("user", user, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
