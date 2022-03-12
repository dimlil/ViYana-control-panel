import axios from "axios";
axios.defaults.withCredentials = true;
export const deletePostService = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/delete/${id}`,
        { withCredentials: true }
      );
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
};
