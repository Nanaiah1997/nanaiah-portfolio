export function OgCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#07080c",
        color: "#f3f5f8",
        padding: "72px",
        fontFamily: "ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 22,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#9eb0ff",
        }}
      >
        Frontend Software Engineer
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>
          Nanaiah M G
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#b0b7c3", lineHeight: 1.35 }}>
          React.js · Next.js · TypeScript · Data visualization
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#8d95a6",
        }}
      >
        <span>Bengaluru, India</span>
        <span>Nearly 4 years</span>
      </div>
    </div>
  );
}
