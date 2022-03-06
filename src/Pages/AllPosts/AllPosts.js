import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";
import parse from "html-react-parser"

function AllPosts() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    const url = `${env.API_URL}/allPosts`;
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
  return (
    <div>
      <p>Hello</p>

      {posts ? (
        <div>
          {posts.map((post, key) => (
            <div key={key}>
              <h1>{post.title}</h1>
              <p>{parse(post.content)}</p>
            </div>
          ))}
        </div>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default AllPosts;
