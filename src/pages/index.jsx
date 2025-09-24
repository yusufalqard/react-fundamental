import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";


function Home() {
  const [DataSearch, setDataSearch] = useState("");

  const FindChanges = (event) => {
    setDataSearch = event.target.value;
  };
  return (
    <>
      <h1>Simple Portofolio Blog</h1>
      <div>
        Find Article : <input onChange={FindChanges}></input>{" "}
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {DataSearch}</small>
      {posts.map(({title, tags, date}, index) => {
        // Line 19 changes from posts.map((blog) into newest
        // return <div>{blog.title}, {blog.tags}, {blog.date}</div>;
        // Line 21 are work as intended
        // <Article title={blog.title} date={blog.date} tags={blog.tags} />;
        // Line 23 doesnt show any imported array from Article.jsx
        <Article {...{title, tags, date}} key={index} />
      })}
    </>
  );
}

export default Home;
