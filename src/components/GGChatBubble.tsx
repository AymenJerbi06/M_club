"use client";

import { useState } from "react";
import { contact } from "./mclubData";

export default function GGChatBubble() {
  const [open, setOpen] = useState(false);

  return (
    <div className="chat-widget">
      {open ? (
        <div className="chat-panel" role="dialog" aria-label="M Club support chat">
          <h3>Need help?</h3>
          <p>Ask about membership, class schedules, swimming academy, spa reservations, or personal coaching.</p>
          <a className="btn btn-primary" href={contact.phoneHref}>
            Call Reception
          </a>
        </div>
      ) : null}
      <button className="chat-button" type="button" aria-label={open ? "Close chat" : "Open chat"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
          <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 4v2h12V8H6Zm0 4v2h8v-2H6Z" />
        </svg>
      </button>
    </div>
  );
}
