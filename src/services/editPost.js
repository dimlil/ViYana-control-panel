import axios from "axios";

export const editPost = async (id,title, about, content) => {
  try {
     await axios.put(
      `${process.env.REACT_APP_API_URL}/edit/${id}`,
      {
        title,
        about,
        content,
      },
      { withCredentials: true }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
