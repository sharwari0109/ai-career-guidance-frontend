import { Link } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Resume Analyzer", path: "/resume-analyzer" },
    { name: "Skill Gap Analysis", path: "/skill-gap" },
    { name: "Career Recommendation", path: "/career" },
    { name: "Interview Generator", path: "/interview" },
    { name: "Learning Roadmap", path: "/roadmap" },
    { name: "Job Matching", path: "/jobs" },
  ];

  return (
    <div
      style={{
        width: "220px",
        background: "#1E3A8A",
        color: "white",
        padding: "30px 15px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        CareerAI
      </h2>

      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          style={{
            display: "block",
            color: "white",
            textDecoration: "none",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;