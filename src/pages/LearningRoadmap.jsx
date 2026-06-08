import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function LearningRoadmap() {
  const roadmap = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
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
          <h1>Learning Roadmap</h1>

          <div
            style={{
              background: "white",
              marginTop: "30px",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            {roadmap.map((step, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  background: "#EFF6FF",
                  borderLeft: "5px solid #2563EB",
                  borderRadius: "8px",
                }}
              >
                Step {index + 1}: {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LearningRoadmap;