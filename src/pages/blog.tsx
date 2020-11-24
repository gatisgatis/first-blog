import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/loading";
import { RANDOM_NAMES } from "./home";
import AddComment, { InputValue } from "../components/comments/add-comment";

type BlogType = {
  title: string;
  text: string;
  image: string;
  author: string;
};

const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogType>();
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    if (localStorage.getItem(`comments-${id}`)) {
      // @ts-ignore
      setComments([...JSON.parse(localStorage.getItem(`comments-${id}`))]);
    }
  }, []);

  const addComment = (info: InputValue) => {
    if (info.text.length) {
      const name = info.name.length ? info.name : "Unknown";
      const newComment = `${new Date().toLocaleDateString("en-US")}: ${name}: ${
        info.text
      }`;
      
      localStorage.setItem(`comments-${id}`, JSON.stringify([...comments, newComment]));
      setComments([...comments, newComment]);
    }
    return { name: "", text: "" };
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const thisBlog: BlogType = {
          title: response.data.title,
          image: `https://picsum.photos/id/${response.data.id * 2}/400/400`,
          text: response.data.body,
          author: RANDOM_NAMES[Number(response.data.userId)],
        };
        setBlog(thisBlog);
        setLoading(false);
      });
  }, []);

  if (loading && !blog) return <Loading />;
  return (
    <div>
      <div className="d-flex mb-5">
        <img src={blog?.image} alt="" />
        <div className="ml-3">
          <h1>{blog?.title}</h1>
          <h3>{blog?.author}</h3>
          <p>{blog?.text}</p>
        </div>
      </div>
      {comments.map((com) => (
        <h5 key={uuid()}>{com}</h5>
      ))}
      <AddComment onClick={addComment} />
    </div>
  );
};

export default Blog;
