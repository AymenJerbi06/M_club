"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function GGVideoBlock() {
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <section className={`hyrox-angebot ${paused ? "paused" : ""}`}>
      <div className="div-block-95">
        <div className="div-block-86-copy">
          <div className="div-block-85-copy-copy-copy">
            <div className="caps-small">Hybrid classes by MClub</div>
            <h2 className="heading-medium">Experience signature training in your club</h2>
            <p className="p-small">
              Hybrid sessions combine strength, cardio, conditioning and athletic movement so members can train with
              rhythm, coaching and energy.
            </p>
            <ul className="list-9-copy-copy-copy">
              <li className="list-item-9">
                <strong>Guided sessions for members who want intensity without losing form.</strong>
              </li>
              <li className="list-item-9">Strength, endurance, core and mobility in one format.</li>
              <li className="list-item-9">Music-led group energy and coaching cues throughout the class.</li>
            </ul>
            <div className="btn-wrapper-teaser">
              <a href="/classes" className="button primary">
                View classes
              </a>
              <button className="button secondary margin-l-12" type="button" onClick={toggleVideo}>
                {paused ? "Play video" : "Pause video"}
              </button>
            </div>
          </div>

          <div className="div-block-124-copy-copy">
            <video ref={videoRef} className="storm-video" autoPlay muted loop playsInline poster="/mclub/hero-class.jpg">
              <source src="/mclub/classes-motion.mp4" type="video/mp4" />
            </video>
            <Image src="/Logo.jpg" alt="" width={160} height={160} className="image-53" />
          </div>
        </div>
      </div>
    </section>
  );
}
