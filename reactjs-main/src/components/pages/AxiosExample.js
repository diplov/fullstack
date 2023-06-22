import React, { useState } from "react";
import { useEffect } from "react";
import DisplayCard from "./DisplayCard";
import axios from "axios";

const AxiosExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>From Axios</h1>
      {posts.map((item) => {
        return <DisplayCard post={item} />;
      })}
    </>
  );
};

export default AxiosExample;
