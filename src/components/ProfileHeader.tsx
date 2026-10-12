export default function ProfileHeader() {
  return (
    <div
      style={{
        maxWidth: "935px",
        margin: "0 auto",
        padding: "30px 20px",
        display: "flex",
        gap: "80px",
        alignItems: "flex-start",
      }}
    >
      {/* Avatar with gradient ring */}
      <div style={{ flexShrink: 0 }}>
        <div
          style={{
            background:
              "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            padding: "3px",
            borderRadius: "50%",
            width: "156px",
            height: "156px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "50%",
              padding: "3px",
              width: "150px",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo.jpg"
              alt="M CLUB Fitness et Spa profile picture"
              style={{
                width: "144px",
                height: "144px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingTop: "8px",
        }}
      >
        {/* Row 1: username + settings */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 300,
              color: "#262626",
              lineHeight: "24px",
            }}
          >
            mclub_fitness_et_spa
          </span>
          {/* Settings icon */}
          <svg
            aria-label="Options"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            fill="none"
            stroke="#262626"
            strokeWidth="2"
            style={{ cursor: "pointer" }}
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>

        {/* Row 2: stats */}
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
            <span style={{ fontWeight: 600, fontSize: "16px", color: "#262626" }}>
              1,099
            </span>
            <span style={{ color: "#262626", fontSize: "14px" }}>posts</span>
          </div>
          <div style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
            <span style={{ fontWeight: 600, fontSize: "16px", color: "#262626" }}>
              16.3K
            </span>
            <span style={{ color: "#262626", fontSize: "14px" }}>followers</span>
          </div>
          <div style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
            <span style={{ fontWeight: 600, fontSize: "16px", color: "#262626" }}>
              298
            </span>
            <span style={{ color: "#262626", fontSize: "14px" }}>following</span>
          </div>
        </div>

        {/* Row 3: display name */}
        <div>
          <span
            style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#262626",
              display: "block",
            }}
          >
            M CLUB Fitness et Spa
          </span>
        </div>
      </div>
    </div>
  );
}
