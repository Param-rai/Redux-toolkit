import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import { selectAllUser } from "../users/userSlice";

const FormPost = () => {
  const dispatch = useDispatch();
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUser);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="flex flex-col gap-1">
      <h1 className="text-xl text-center mt-2">Add a New Post</h1>
      <form className="flex flex-col gap-1">
        <div className="input-control flex flex-col w-full">
          <label htmlFor="postTitle" className="mr-2">
            Post Title:
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
            className="input w-full"
          />
        </div>
        <div className="input-control flex flex-col w-full">
          <label htmlFor="postAuthor" className="mr-2">
            Author:
          </label>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            className="input select w-full"
          >
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div className="input-control flex flex-col w-full">
          <label htmlFor="postContent" className="mr-2">
            Content:
          </label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
            className="input w-full"
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
