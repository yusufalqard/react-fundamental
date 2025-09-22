import posts from "../posts.json";
import Article from "../components/Article";

function Home() {
  return (
    <>
      <h1>Simple Portofolio Blog</h1>
      {posts.map((blog) => {
        <Article title={blog.title} date={blog.date} tags={blog.tags} />;
      })}
    </>
  );
}

export default Home;
