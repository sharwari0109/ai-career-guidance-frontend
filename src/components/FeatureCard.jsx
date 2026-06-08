function FeatureCard({ title, description }) {
  return (
    <div
      style={{
        width: "280px",
        background: "#ffffff",
        padding: "30px",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          color: "#2563EB",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#64748B",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;