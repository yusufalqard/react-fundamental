import posts from "../posts.json";
import Article from "../components/Article";

function Home() {
  return (
    <>
      <h1>Simple Portofolio Blog</h1>
      {posts.map((blog) => {
        // return <div>{blog.title}, {blog.tags}, {blog.date}</div>;
        // Line 9 are work as intended
        <Article title={blog.title} date={blog.date} tags={blog.tags} />;
        // Line 11 doesnt show any imported array from Article.jsx
      })}
    </>
  );
}

export default Home;
