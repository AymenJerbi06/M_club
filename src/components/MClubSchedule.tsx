"use client";

import { useMemo, useState } from "react";
import { scheduleItems } from "./mclubData";

const filters = ["All", "Fitness", "Strength", "Mind Body", "Aquatics", "Dance"];

export default function MClubSchedule() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") return scheduleItems;
    return scheduleItems.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="workflow-section workflow-section-light" id="schedule">
      <div className="workflow-container">
        <div className="workflow-split-heading">
          <div>
            <p className="hp-eyebrow">Weekly schedule</p>
            <h2 className="hp-section-title">Filter the classes before you book.</h2>
          </div>
          <p>
            Morning fitness starts at 06:30. Evening classes begin from 18:30, with aquatic sessions across the week.
          </p>
        </div>

        <div className="schedule-tabs" role="tablist" aria-label="Class type filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              key={filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="schedule-list">
          {visibleItems.map((item) => (
            <article className="schedule-row" key={`${item.day}-${item.time}-${item.title}`}>
              <span>
                <strong>{item.day}</strong>
                <small>{item.time}</small>
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.location}</small>
              </span>
              <span>
                <strong>{item.coach}</strong>
                <small>{item.type}</small>
              </span>
              <a href="/contact">Book</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
