import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ResumeUpload from "../components/ResumeUpload";

function ResumeAnalyzer() {
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
          <h1>Resume Analyzer</h1>

          <div style={{ marginTop: "30px" }}>
            <ResumeUpload />
          </div>

          <div
            style={{
              marginTop: "30px",
              background: "white",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h2>ATS Score: 85%</h2>

            <h3 style={{ marginTop: "20px" }}>Skills Found</h3>

            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>

            <h3 style={{ marginTop: "20px" }}>Missing Skills</h3>

            <ul>
              <li>Docker</li>
              <li>AWS</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeAnalyzer;