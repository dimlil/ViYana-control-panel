import axios from "axios";

export const createPost = async (title, about, content) => {
  try {
    const responce = await axios.post(
      `${process.env.REACT_APP_API_URL}/create`,
      {
        title,
        about,
        content,
      },
      { withCredentials: true }
    );
    console.log(responce.data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
