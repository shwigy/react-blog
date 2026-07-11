import blog from "./blog";
import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header name={blog.name} />
      <div className="content">
        <About image={blog.image} about={blog.about} />
        <ArticleList posts={blog.posts} />
      </div>
    </div>
  );
}

export default App;