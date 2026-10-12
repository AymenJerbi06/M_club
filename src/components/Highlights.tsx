const highlights = [
  { id: "hl-01", label: "Sentidobellevue", image: "/images/highlights/hl-01.jpg" },
  { id: "hl-02", label: "SPA", image: "/images/highlights/hl-02.jpg" },
  { id: "hl-03", label: "FULLBODYWORKOUT", image: "/images/highlights/hl-03.jpg" },
  { id: "hl-04", label: "Adresse", image: "/images/highlights/hl-04.jpg" },
  { id: "hl-05", label: "EMS", image: "/images/highlights/hl-05.jpg" },
  { id: "hl-06", label: "À la une", image: "/images/highlights/hl-06.jpg" },
  { id: "hl-07", label: "À la une", image: "/images/highlights/hl-07.jpg" },
  { id: "hl-08", label: "À la une", image: "/images/highlights/hl-08.jpg" },
  { id: "hl-09", label: "Biking", image: "/images/highlights/hl-09.jpg" },
  { id: "hl-10", label: "TRX", image: "/images/highlights/hl-10.jpg" },
];

export default function Highlights() {
  return (
    <div
      style={{
        maxWidth: "935px",
        margin: "0 auto",
        borderTop: "1px solid #dbdbdb",
        borderBottom: "1px solid #dbdbdb",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "28px",
          overflowX: "auto",
          padding: "16px 20px",
          scrollbarWidth: "none",
        }}
      >
        {highlights.map((hl) => (
          <div
            key={hl.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              minWidth: "66px",
            }}
          >
            {/* Gradient ring */}
            <div
              style={{
                background:
                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                padding: "2px",
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "50%",
                  padding: "2px",
                  width: "66px",
                  height: "66px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hl.image}
                  alt={hl.label}
                  style={{
                    width: "62px",
                    height: "62px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <span
              style={{
                fontSize: "12px",
                color: "#262626",
                textAlign: "center",
                width: "74px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {hl.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
