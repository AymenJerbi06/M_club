export default function IGNav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(255,255,255,0.98)",
        borderBottom: "1px solid #dbdbdb",
        height: "60px",
      }}
    >
      <div
        style={{
          maxWidth: "935px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Instagram wordmark SVG */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-label="Instagram"
            viewBox="0 0 110 35"
            height="29"
            width="103"
            fill="#262626"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="0"
              y="26"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
              fontSize="26"
              fontStyle="italic"
              fontWeight="400"
              fill="#262626"
            >
              Instagram
            </text>
          </svg>
        </div>

        {/* Search input */}
        <div style={{ flex: "0 0 auto" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "1px solid #dbdbdb",
              borderRadius: "8px",
              padding: "0 12px",
              height: "36px",
              width: "268px",
              background: "#fafafa",
              fontSize: "14px",
              color: "#262626",
            }}
          />
        </div>

        {/* Right buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button
            style={{
              color: "#0095f6",
              fontWeight: 600,
              fontSize: "14px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
          <button
            style={{
              color: "#0095f6",
              fontWeight: 600,
              fontSize: "14px",
              background: "none",
              border: "1px solid #0095f6",
              borderRadius: "8px",
              padding: "6px 16px",
              cursor: "pointer",
            }}
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
