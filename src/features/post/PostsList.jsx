import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "./postSclice";
import FormPost from "./FormPost";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  let orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const rederedPost = orderedPosts.map((post) => (
    <article key={post.id} className="card mt-3 p-2">
      <strong>
        <h2>{post.title}</h2>
      </strong>
      <p className="mt-2">{post.content.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamps={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="flex flex-col gap-2 pb-4">
      <FormPost />
      <div>
        <h2>Posts</h2>
        {rederedPost}
      </div>
    </section>
  );
};

export default PostsList;
