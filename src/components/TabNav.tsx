"use client";
import { useState } from "react";

const tabs = [
  {
    id: "posts",
    label: "POSTS",
    icon: (
      <svg
        aria-label="Posts"
        viewBox="0 0 24 24"
        height="12"
        width="12"
        fill="currentColor"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    id: "reels",
    label: "REELS",
    icon: (
      <svg
        aria-label="Reels"
        viewBox="0 0 24 24"
        height="12"
        width="12"
        fill="currentColor"
      >
        <path d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    id: "tagged",
    label: "TAGGED",
    icon: (
      <svg
        aria-label="Tagged"
        viewBox="0 0 24 24"
        height="12"
        width="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

export default function TabNav() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div
      style={{
        maxWidth: "935px",
        margin: "0 auto",
        borderTop: "1px solid #dbdbdb",
        display: "flex",
        justifyContent: "center",
        gap: "0",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 48px",
              height: "52px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: isActive ? "#262626" : "#8e8e8e",
              cursor: "pointer",
              borderTop: isActive ? "1px solid #262626" : "1px solid transparent",
              marginTop: "-1px",
              background: "none",
              border: "none",
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: isActive ? "#262626" : "transparent",
              fontFamily: "inherit",
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
