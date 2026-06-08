import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function InterviewGenerator() {
  const questions = [
    "Explain React Virtual DOM.",
    "Difference between let, const and var?",
    "What is useEffect Hook?",
    "Explain Event Loop in JavaScript.",
    "Difference between SQL and NoSQL?",
  ];

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
          <h1>Interview Question Generator</h1>

          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              marginTop: "30px",
            }}
          >
            <select
              style={{
                padding: "10px",
                width: "250px",
                marginBottom: "20px",
              }}
            >
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>Data Analyst</option>
            </select>

            <div>
              <button
                style={{
                  background: "#2563EB",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                Generate Questions
              </button>
            </div>

            <div style={{ marginTop: "30px" }}>
              {questions.map((q, index) => (
                <p key={index} style={{ marginBottom: "15px" }}>
                  <strong>Q{index + 1}.</strong> {q}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InterviewGenerator;