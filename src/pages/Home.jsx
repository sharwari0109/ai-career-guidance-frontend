import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResumeUpload from "../components/ResumeUpload";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "calc(100vh - 70px)",
          overflow: "hidden",
          background: "#F8FAFC",
        }}
      >
        <Sidebar />

       <main
  style={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F8FAFC",
    padding: "40px",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "900px",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "48px",
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: "20px",
      }}
    >
      AI Career Guidance Platform
    </h1>

    <p
      style={{
        fontSize: "18px",
        color: "#64748B",
        lineHeight: "1.7",
        maxWidth: "700px",
        margin: "0 auto 30px",
      }}
    >
      Analyze resumes, identify skill gaps, receive career recommendations,
      prepare for interviews, discover learning roadmaps, and find jobs using
      AI.
    </p>

    <button
      style={{
        background: "#2563EB",
        color: "#fff",
        border: "none",
        padding: "14px 30px",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        marginBottom: "40px",
      }}
    >
      Analyze Resume
    </button>

    <ResumeUpload />

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "80px",
        marginTop: "50px",
        flexWrap: "wrap",
      }}
    >
      <div>
        <h2
          style={{
            color: "#2563EB",
            fontSize: "32px",
          }}
        >
          500+
        </h2>
        <p style={{ color: "#64748B" }}>Resumes Analyzed</p>
      </div>

      <div>
        <h2
          style={{
            color: "#2563EB",
            fontSize: "32px",
          }}
        >
          100+
        </h2>
        <p style={{ color: "#64748B" }}>Career Paths</p>
      </div>

      <div>
        <h2
          style={{
            color: "#2563EB",
            fontSize: "32px",
          }}
        >
          95%
        </h2>
        <p style={{ color: "#64748B" }}>Recommendation Accuracy</p>
      </div>
    </div>
  </div>
</main>
      </div>
    </>
  );
}

export default Home;