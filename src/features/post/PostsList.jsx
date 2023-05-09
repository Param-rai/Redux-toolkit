import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSclice";
import FormPost from "./FormPost";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  const rederedPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <FormPost />
      <h2>Posts</h2>
      {rederedPost}
    </section>
  );
};

export default PostsList;