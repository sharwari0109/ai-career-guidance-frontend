import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const stats = [
    { title: "Resumes Analyzed", value: "500+" },
    { title: "Career Paths", value: "100+" },
    { title: "Jobs Matched", value: "250+" },
    { title: "Interview Questions", value: "1200+" },
  ];

  const activities = [
    "Resume uploaded successfully",
    "Skill gap analysis completed",
    "Learning roadmap generated",
    "Job recommendations updated",
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)",
          background: "#F8FAFC",
        }}
      >
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "40px",
            overflowY: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "10px",
              color: "#0F172A",
            }}
          >
            Dashboard
          </h1>

          <p
            style={{
              color: "#64748B",
              marginBottom: "30px",
            }}
          >
            Welcome back! Here's your career progress.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
            }}
          >
            {stats.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    color: "#2563EB",
                    marginBottom: "10px",
                  }}
                >
                  {item.value}
                </h2>

                <p>{item.title}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              background: "white",
              marginTop: "30px",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Recent Activity</h2>

            {activities.map((activity, index) => (
              <p
                key={index}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                • {activity}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;