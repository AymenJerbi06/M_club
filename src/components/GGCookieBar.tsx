"use client";

import { useEffect, useState } from "react";

const storageKey = "mclub-cookie-choice";

export default function GGCookieBar() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);

  useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) !== "saved");
  }, []);

  const save = () => {
    window.localStorage.setItem(storageKey, "saved");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-bar" role="dialog" aria-label="Cookie preferences">
      <p>We use essential cookies by default. You can also allow analytics to help improve the M Club website.</p>

      {customizing ? (
        <div className="cookie-options">
          <label>
            <input type="checkbox" checked readOnly />
            Essential cookies
          </label>
          <label>
            <input type="checkbox" />
            Analytics cookies
          </label>
        </div>
      ) : null}

      <div className="cookie-actions">
        <button className="btn btn-outline" type="button" onClick={() => setCustomizing((value) => !value)}>
          Customize
        </button>
        <button className="btn btn-primary" type="button" onClick={save}>
          Accept
        </button>
      </div>
    </div>
  );
}
