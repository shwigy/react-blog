function Header({ name }) {
  return (
    <header style={{
      background: "#1e293b",
      color: "#f1f5f9",
      padding: "1.5rem 2rem",
      borderRadius: "8px",
      marginBottom: "1rem"
    }}>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;