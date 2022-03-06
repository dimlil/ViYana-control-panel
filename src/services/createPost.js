import axios from "axios";
import env from "react-dotenv";
// import jsCookie from "js-cookie";

export const createPost = async (title, about, content) => {
  try {
    const responce = await axios.post(
      `${env.API_URL}/create`,
      {
        title,
        about,
        content,
      },
      { withCredentials: true }
    );
    console.log(responce.data);
    // const user = responce.data.split(" ")[1];
    // jsCookie.set("user", user, {
    //   expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    // });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
