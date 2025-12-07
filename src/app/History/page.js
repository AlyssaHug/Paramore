"use client";

import { useState } from "react";
import TimelineItem from "./timeline";
import styles from "./history.module.css";

const TIMELINE_DATA = [
    {
        id: "1",
        year: "2002",
        title: "The Start",
        description:
            "In 2002, at age 13, vocalist Hayley Williams moved from her hometown Meridian, Mississippi, to Franklin, Tennessee",
        details: [
            "Hayley moves to Franklin, TN after her parents' divorce",
            "Meets brothers Josh & Zac Farro at school",
            "Starts writing songs together immediately",
        ],
    },
    {
        id: "2",
        year: "2003",
        title: "Forming the Band",
        description:
            "The original plan of the label was to turn her into a pop singer. But Williams resisted, saying she wanted alternative rock music with a band.",
        details: [
            "Hayley signs with Atlantic Records as a solo artist",
            "Refuses to be a pop star — insists on forming a band",
            "Begins jamming with Josh, Zac, and Jeremy Davis",
        ],
    },
    {
        id: "3",
        year: "2004",
        title: "Official Formation",
        description:
            "The band was officially formed by Josh Farro (lead guitar), Zac Farro (drums), Jeremy Davis (bass), and Hayley Williams (lead vocals).",
        details: [
            "Official lineup: Hayley, Josh, Zac, Jeremy",
            "Jason Bynum joins as rhythm guitarist",
            "Band name becomes Paramore (play on 'paramour')",
        ],
    },
    {
        id: "4",
        year: "2006",
        title: "All We Know Is Falling",
        description:
            "The release of their debut album All We Know Is Falling — the start of something great.",
        details: [
            "Debut album released July 26, 2005 on Fueled by Ramen",
            "Features 'Pressure', 'Emergency', 'Here We Go Again'",
            "Iconic teal/orange color scheme begins",
            "First major tours with bands like Simple Plan",
        ],
    },
];

export default function HistoryPage() {
    const [expandedId, setExpandedId] = useState(null);
    const handleClick = (id) => setExpandedId(expandedId === id ? null : id);

    return (
        <div className={styles.pageLayout}>
            <div className={styles.titleColumn}>
                <h1 className={styles.title}>
                    P<br className={styles.titlebreak}/>a<br className={styles.titlebreak}/>r<br className={styles.titlebreak}/>a<br />m<br className={styles.titlebreak}/>o<br className={styles.titlebreak}/>r<br className={styles.titlebreak}/>e
                </h1>
            </div>

            <div className={styles.timelineColumn}>
                <div className={styles.timelineWrapper}>
                    <div className={styles.centerLine} />
                    <div className={styles.timelineItems}>
                        {TIMELINE_DATA.map((entry, index) => (
                            <TimelineItem
                                key={entry.id}
                                entry={entry}
                                isExpanded={expandedId === entry.id}
                                onClick={() => handleClick(entry.id)}
                                onClose={() => setExpandedId(null)}
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
