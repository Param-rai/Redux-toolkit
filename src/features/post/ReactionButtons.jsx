import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-2 flex gap-1">
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <button
            key={name}
            onClick={() =>
              dispatch(addReaction({ postId: post.id, reaction: name }))
            }
            className="px-1 flex justify-center items-center"
          >
            {emoji}
            {post.reactions[name]}
          </button>
        );
      })}
    </div>
  );
};

export default ReactionButtons;
