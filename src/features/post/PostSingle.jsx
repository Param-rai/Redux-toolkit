import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostSingle = ({ post }) => {
  return (
    <article className="card mt-3 p-2">
      <strong>
        <h2>{post.title}</h2>
      </strong>
      <p className="mt-2">{post.body.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamps={post.date} />
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostSingle;
