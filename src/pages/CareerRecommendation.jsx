import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function CareerRecommendation() {
  const careers = [
    { role: "Full Stack Developer", match: "92%" },
    { role: "Frontend Developer", match: "89%" },
    { role: "Software Engineer", match: "85%" },
    { role: "AI Engineer", match: "78%" },
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
          <h1>Career Recommendations</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {careers.map((career) => (
              <div
                key={career.role}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                }}
              >
                <h2>{career.role}</h2>
                <p style={{ color: "#2563EB" }}>{career.match} Match</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CareerRecommendation;