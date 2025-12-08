"use client";

import { useState } from "react";
import TimelineItem from "./timeline";
import styles from "./history.module.css";

const TIMELINE_DATA = [
    {
        id: "dot-2002",
        year: "2002",
        title: "The Start",
        description:
            "In 2002, at age 13, vocalist Hayley Williams moved from her hometown Meridian, Mississippi, to Franklin, Tennessee",
        image: "/history/2002.png",
        details: [
            /* ... */
        ],
    },
    {
        id: "dot-2003",
        year: "2003",
        title: "Forming the Band",
        description: "The original plan of the label was to turn her into a pop singer, but Williams resisted, saying that she wanted to play alternative rock music with a band.",
        image: "/history/2003.png",
        details: [
            /* ... */
        ],
    },
    {
        id: "dot-2004",
        year: "2004",
        title: "Official Formation",
        description: "The band was officially formed by Josh Farro (Lead Guitar/Backing Vocals), Zac Farro (Drums), Davis (Bass Guitar) and Williams (Lead Vocals)",
        image: "/history/2004.png",
        details: [
            /* ... */
        ],
    },
    {
        id: "dot-2005",
        year: "2005",
        title: "All We Know Is Falling",
        description: "The release of their first album, All We Know is Falling.",
        image: "/history/2005.png",
        details: [
            /* ... */
        ],
    },
];

export default function HistoryPage() {
    const [expandedId, setExpandedId] = useState(null);
    const handleClick = (id) => setExpandedId(expandedId === id ? null : id);

    return (
        <div className={styles.pageLayout}>
            <div className={styles.titleColumn}>
                <h1 className={styles.title}>Paramore</h1>
            </div>

            <div className={styles.timelineColumn}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.centerLine} />
                    <div className={styles.timelineItems}>
                        {TIMELINE_DATA.map((entry, index) => (
                            <TimelineItem
                                key={entry.id}
                                entry={entry}
                                id={entry.id} // ← THIS IS NEW
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
