import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function SkillGapAnalysis() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", height: "calc(100vh - 70px)" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "40px",
            background: "#F8FAFC",
          }}
        >
          <h1>Skill Gap Analysis</h1>

          <div
            style={{
              background: "white",
              marginTop: "30px",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h2>Current Skills</h2>

            <p>React, JavaScript, HTML, CSS</p>

            <h2 style={{ marginTop: "20px" }}>Required Skills</h2>

            <p>React, Node.js, MongoDB, Docker, AWS</p>

            <h2 style={{ marginTop: "20px" }}>Completion</h2>

            <h1 style={{ color: "#2563EB" }}>60%</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillGapAnalysis;