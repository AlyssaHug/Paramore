"use client";

import { useState } from "react";
import TimelineItem from "./timeline";
import styles from "./history.module.css";

const TIMELINE_DATA = [
  {
    id: "dot-2002",
    year: "2002",
    title: "The Start",
    description: "In 2002, at age 13, vocalist Hayley Williams moved from her hometown Meridian, Mississippi, to Franklin, Tennessee",
    image: "/images/2002.jpg",
    details: [/* ... */],
  },
  {
    id: "dot-2003",
    year: "2003",
    title: "Forming the Band",
    description: "...",
    image: "/images/2003.jpg",
    details: [/* ... */],
  },
  {
    id: "dot-2004",
    year: "2004",
    title: "Official Formation",
    description: "...",
    image: "/images/2004.jpg",
    details: [/* ... */],
  },
  {
    id: "dot-2005",
    year: "2005",
    title: "All We Know Is Falling",
    description: "The release of their debut album...",
    image: "/images/awif.jpg",
    details: [/* ... */],
  },

];

export default function HistoryPage() {
  const [expandedId, setExpandedId] = useState(null);
  const handleClick = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <div className={styles.pageLayout}>
      <div className={styles.titleColumn}>
        <h1 className={styles.title}>P<br />a<br />r<br />a<br />m<br />o<br />r<br />e</h1>
      </div>

      <div className={styles.timelineColumn}>
        <div className={styles.timelineWrapper}>
          <div className={styles.centerLine} />
          <div className={styles.timelineItems}>
            {TIMELINE_DATA.map((entry, index) => (
              <TimelineItem
                key={entry.id}
                entry={entry}
                id={entry.id}                      // ← THIS IS NEW
                isExpanded={expandedId === entry.id}
                onClick={() => handleClick(entry.id)}
                isEven={index % 2 === 0}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}