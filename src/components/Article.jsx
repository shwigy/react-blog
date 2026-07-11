function Article({ title, date, preview }) {
  return (
    <article style={{
      background: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      marginBottom: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
    }}>
      <h3 style={{ marginBottom: "0.25rem", color: "#1e293b" }}>{title}</h3>
      <small style={{ color: "#94a3b8" }}>{date}</small>
      <p style={{ marginTop: "0.75rem", color: "#555" }}>{preview}</p>
    </article>
  );
}

export default Article;