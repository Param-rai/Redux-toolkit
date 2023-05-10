import { useState } from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";
import "./app.css";

function ChangeTab({ setTab }) {
  return (
    <div className="flex gap-1 justify-center mt-2">
      <button className="p-2" onClick={() => setTab("counter")}>
        Counter example
      </button>
      <button className="p-2" onClick={() => setTab("posts")}>
        Posts Example
      </button>
    </div>
  );
}

function App() {
  const [tab, setTab] = useState(null);

  switch (tab) {
    case "counter":
      return (
        <div className="container flex flex-col items-center justify-center gap-1">
          <ChangeTab setTab={setTab} />
          <Counter />
        </div>
      );
    case "posts":
      return (
        <div className="container flex flex-col items-center justify-center gap-1">
          <ChangeTab setTab={setTab} />
          <PostsList />
        </div>
      );
    default:
      return <ChangeTab setTab={setTab} />;
  }
}

export default App;
