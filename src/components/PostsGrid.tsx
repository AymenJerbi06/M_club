"use client";
import { useState } from "react";

const posts = [
  { id: "post-01", image: "/images/posts/post-01.jpg", likes: 412, comments: 8 },
  { id: "post-02", image: "/images/posts/post-02.jpg", likes: 289, comments: 5 },
  { id: "post-03", image: "/images/posts/post-03.jpg", likes: 534, comments: 12 },
  { id: "post-04", image: "/images/posts/post-04.jpg", likes: 678, comments: 19 },
  { id: "post-05", image: "/images/posts/post-05.jpg", likes: 321, comments: 7 },
  { id: "post-06", image: "/images/posts/post-06.jpg", likes: 445, comments: 11 },
  { id: "post-07", image: "/images/posts/post-07.jpg", likes: 756, comments: 23 },
  { id: "post-08", image: "/images/posts/post-08.jpg", likes: 198, comments: 3 },
  { id: "post-09", image: "/images/posts/post-09.jpg", likes: 389, comments: 9 },
];

function PostItem({
  post,
}: {
  post: { id: string; image: string; likes: number; comments: number };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        aspectRatio: "1",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt={`Post ${post.id}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.15s",
        }}
      >
        {/* Likes */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            height="20"
            width="20"
            fill="#ffffff"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {post.likes.toLocaleString()}
        </div>
        {/* Comments */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            height="20"
            width="20"
            fill="#ffffff"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          {post.comments}
        </div>
      </div>
    </div>
  );
}

export default function PostsGrid() {
  return (
    <div
      style={{
        maxWidth: "935px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3px",
        marginTop: "4px",
      }}
    >
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
