import { useSelector } from "react-redux";
import { selectAllUser } from "../users/userSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUser);
  const author = users.find((user) => user.id === userId);
  return <span> by {author ? author.name : "unknown author"}</span>;
};

export default PostAuthor;
