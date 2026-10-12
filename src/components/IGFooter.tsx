const footerLinks = [
  "Meta",
  "About",
  "Blog",
  "Jobs",
  "Help",
  "API",
  "Privacy",
  "Terms",
  "Locations",
  "Instagram Lite",
  "Threads",
  "Contact Uploading & Non-Users",
  "Meta Verified",
];

export default function IGFooter() {
  return (
    <footer
      style={{
        maxWidth: "935px",
        margin: "24px auto 40px",
        padding: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0",
          marginBottom: "16px",
        }}
      >
        {footerLinks.map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: "12px",
              color: "#8e8e8e",
              margin: "0 8px 8px 0",
              textDecoration: "none",
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <p style={{ fontSize: "12px", color: "#8e8e8e" }}>
        © 2025 Instagram from Meta
      </p>
    </footer>
  );
}
