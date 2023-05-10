import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSclice";
import { selectAllUser } from "../users/userSlice";

const FormPost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUser);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex flex-col gap-1">
      <h1 className="text-xl text-center mt-2">Add a New Post</h1>
      <form className="flex flex-col gap-1">
        <div className="input-control">
          <label htmlFor="postTitle" className="mr-2">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="input"
          />
        </div>
        <div className="input-control">
          <label htmlFor="postAuthor" className="mr-2">
            Author:
          </label>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            className="input select"
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="input-control">
          <label htmlFor="postContent" className="mr-2">
            Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            className="input"
          />
        </div>
        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          className="mx-auto w-50"
        >
          Save Post
        </button>
      </form>
    </section>
  );
};
export default FormPost;
