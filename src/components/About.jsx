function About({ image, about }) {
  return (
    <aside style={{
      flex: "0 0 220px",
      background: "#fff",
      borderRadius: "8px",
      padding: "1.5rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      textAlign: "center",
      height: "fit-content"
    }}>
      <img
        src={image}
        alt="blog logo"
        style={{
          width: "100%",
          maxWidth: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "50%",
          marginBottom: "1rem"
        }}
      />
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{about}</p>
    </aside>
  );
}

export default About;