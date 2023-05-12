import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPost,
  getPostError,
  getPostStatus,
  selectAllPost,
} from "./postSlice";
import FormPost from "./FormPost";
import PostSingle from "./PostSingle";

const PostsList = () => {
  const posts = useSelector(selectAllPost);
  const status = useSelector(getPostStatus);
  const error = useSelector(getPostError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPost());
    }
  }, [status, dispatch]);

  let content;
  if (status === "laoding") content = <p>Loading...</p>;
  else if (status === "succeeded") {
    let orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post, i) => <PostSingle key={i} post={post} />);
  } else if (status === "failed") content = <p>{error}</p>;

  return (
    <section className="flex flex-col gap-2 pb-4">
      <FormPost />
      <div>
        <h2>Posts</h2>
        {content}
      </div>
    </section>
  );
};

export default PostsList;
