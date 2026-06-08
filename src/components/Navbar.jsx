import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#ffffff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          color: "#2563EB",
          fontWeight: "700",
        }}
      >
        CareerAI
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#111827",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          style={{
            textDecoration: "none",
            color: "#111827",
            fontWeight: "500",
          }}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;