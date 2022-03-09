import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./posts.module.css";
import { useNavigate } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/allPosts`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPosts(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  const redirecting=(id)=>{
    navigate(`/posts/${id}`)
  }
  return (
    <div>
      {posts ? (
        <div className={styles.postDiv}>
          {posts.map((post, key) => (
            <div key={key} className={styles.post} onClick={()=>{redirecting(post._id)}}>
              <h1>{post.title}</h1>
              <p>{post.about}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AllPosts;
