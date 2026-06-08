import { Link } from "react-router-dom";

function Feature({ title, text }) {
  return (
    <div
      style={{
        background: "white",
        width: "250px",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h3 style={{ color: "#2563EB", marginBottom: "10px" }}>
        {title}
      </h3>

      <p style={{ color: "#64748B" }}>
        {text}
      </p>
    </div>
  );
}

function Landing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#eef2ff,#f8fafc,#dbeafe)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#2563EB",
            marginBottom: "20px",
          }}
        >
          CareerAI
        </h1>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          AI-Powered Career Guidance Platform
        </h2>

        <p
          style={{
            fontSize: "20px",
            color: "#64748B",
            marginBottom: "40px",
          }}
        >
          Analyze resumes, identify skill gaps, get career recommendations,
          and prepare for interviews using AI.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link
            to="/login"
            style={{
              background: "#2563EB",
              color: "white",
              padding: "15px 30px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{
              background: "white",
              color: "#2563EB",
              padding: "15px 30px",
              borderRadius: "10px",
              border: "2px solid #2563EB",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </div>

        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Feature
            title="Resume Analysis"
            text="Get ATS score and insights."
          />

          <Feature
            title="Skill Gap Analysis"
            text="Identify missing skills."
          />

          <Feature
            title="Career Recommendations"
            text="Get AI-powered suggestions."
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;