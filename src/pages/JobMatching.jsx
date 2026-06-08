import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function JobMatching() {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Google",
      match: "92%",
    },
    {
      title: "Frontend Developer",
      company: "Amazon",
      match: "89%",
    },
    {
      title: "Full Stack Developer",
      company: "Microsoft",
      match: "87%",
    },
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
          <h1>Job Matching</h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {jobs.map((job) => (
              <div
                key={job.title}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h2>{job.title}</h2>

                <p>{job.company}</p>

                <h3
                  style={{
                    marginTop: "15px",
                    color: "#2563EB",
                  }}
                >
                  {job.match} Match
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default JobMatching;