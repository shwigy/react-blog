import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main style={{ flex: 1 }}>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;