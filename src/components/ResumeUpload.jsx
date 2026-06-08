import{ useState } from "react";

function ResumeUpload() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        background: "#ffffff",
        padding: "20px 40px",
        borderRadius: "20px",
        border: "2px dashed #2563EB",
        textAlign: "center",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginBottom: "12px",
          color: "#2563EB",
          fontSize: "18px",
        }}
      >
        Upload Your Resume
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <br />

      {fileName && (
        <p
          style={{
            color: "#64748B",
            margin: "10px 0",
          }}
        >
          {fileName}
        </p>
      )}

      <button
        style={{
          marginTop: "12px",
          background: "#2563EB",
          color: "#ffffff",
          border: "none",
          padding: "10px 22px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;
