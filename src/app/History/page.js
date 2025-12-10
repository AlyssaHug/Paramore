"use client";

import { useState } from "react";
import TimelineItem from "./timeline";
import styles from "./history.module.css";
import NextBtn from "../components/NextBtn/NextBtn";
import Header from "../components/Header/Header";

const TIMELINE_DATA = [
    {
        id: "dot-2002",
        year: "2002",
        title: "The Start",
        summary:
            "In 2002, at age 13, vocalist Hayley Williams moved from her hometown Meridian, Mississippi, to Franklin, Tennessee.",
        description:
            "In 2002, at age 13, vocalist Hayley Williams moved from her hometown Meridian, Mississippi, to Franklin, Tennessee. The original plan of the label was to turn her into a pop singer, but Williams resisted, saying that she wanted to play alternative rock music with a band.",
        image: "/history/2002.png",
    },
    {
        id: "dot-2004",
        year: "2004",
        title: "Official Formation",
        summary:
            "The band was officially formed by Josh Farro (Lead Guitar/Backing Vocals), Zac Farro (Drums), Davis (Bass Guitar) and Williams (Lead Vocals)",
        description:
            "The band was officially formed by Josh Farro (Lead Guitar/Backing Vocals), Zac Farro (Drums), Davis (Bass Guitar) and Williams (Lead Vocals). The name 'Paramore' came from the maiden name of the mother of one of their first bass players. Once the group learned of the homophone paramour and its meaning (secret lover) thye chose to keep the name with its unique spelling.",

        image: "/history/2004.png",
    },

    {
        id: "dot-2005",
        year: "2005",
        title: "All We Know Is Falling",
        summary: "The release of their first album, All We Know is Falling.",
        description:
            "They released their first album, the cover being an empty couch with the shadow of someone walking away, representing the member Jeremy Davis leaving the band before their debut. The album released on July 26, 2005 and reached No. 30 on Billboard's Heatseekers Chart. They released 'Pressure' as the albums first single.",

        image: "/history/2005.png",
    },
    {
        id: "dot-2007",
        year: "2007",
        title: "Riot!",
        summary:
            "After swapping out a member, they released their second album, Riot!",
        description:
            "Before working on their next album, Davis was expelled from the band and replaced with Taylor York. The album 'Riot!' was released on June 12, 2007, reaching No. 20 on the Billboard 200 with the album selling 44,000 units in its first week in the US. The name 'Riot!' was chosen for its meaning, sudden bursts of uncontrolled emotion, and summed up the album well.",

        image: "/history/2007.png",
    },
    {
        id: "dot-2009",
        year: "2009",
        title: "brand new eyes",
        summary:
            "Another album under their belt but not everyone could keep up",
        description:
            "The band releases their third album'brand new eyes', on September 29, 2009. This album is the first album with Taylor York as their guitarist and now permanent member. Though shortly before their tour, guitarist Josh Farro announced he was staying behind of the tour to plan his wedding. Later on December 18, 2010 a message was released stating that both Zac + Josh Farro were leaving the band.",

        image: "/history/2009.png",
    },
    {
        id: "dot-2013",
        year: "2013",
        title: "Self-titled + more exits",
        summary: "Their fourth studio album!",
        description:
            "The band releases their fourth album, 'Paramore', on April 5, 2013. This was their first album without Josh Farro and the only one without Zac Farro. The album debuted at No. 1 on the US Billboard 200 with it's first week of sales hitting 106,000 copies.",

        image: "/history/2013.png",
    },
    {
        id: "dot-2015",
        year: "2015",
        title: "The band takes a break",
        summary:
            "With legal battles and personal matters, the band took a small break",
        description:
            "On December 14, 2025, bassist Jeremy Davis left the band. Later in 2016 he was involved in a legal battle with Paramore, claiming to be eligible to the benefits of the business partnership. During this period Hayley williams left he band for a short period to focus on her mental health, going through a divorce with her ex-husband Chad Gilbert. This all left Taylor York as the only member of Paramore for this period.",

        image: "/history/2015.png",
    },
    {
        id: "dot-2016",
        year: "2016",
        title: "Returning faces",
        summary:
            "After Laughter is released and familiar faces return to the band",
        description:
            "On January 19, 2016, Hayley announced the band was working on their fifth album. In pictures posted of them in the studio, Zac Farro was seen, confirming he returned as the bands drummer. Their fifth album, After Laughter, was released on May 12, 2017.",

        image: "/history/2016.png",
    },
    {
        id: "dot-2022",
        year: "2022",
        title: "More concerts + changes",
        summary: "They announce a tour along with changing some art",
        description:
            "On July 15, 2022, Paramore announced they'd embark on a tour in October/November of 2022, this would be their first live performances since 2018. They also cchanged the cover of their self-titled album to a picture of just Hayley Williams, speculated to be due to the previous legal battle with one of the members pictured on the original.",

        image: "/history/2022.png",
    },
    {
        id: "dot-2023",
        year: "2023",
        title: "Another Album!",
        summary: "Their sixth studio album",
        description:
            "On February 10, 2023, Paramore releases their sizth album 'This is Why', marking their last album under Atlantic Records. The band also teased, later released 'Re: This is Why', a remixed version of the album. Later on December 27, 2023, the band wiped their social media accounts and their website became inaccessible.",

        image: "/history/2023.png",
    },
    {
        id: "dot-2024",
        year: "2024",
        title: "Covers + Tours",
        summary:
            "With participating in a tribute album and opening for Taylor Swift, the band kept busy",
        description:
            "On January 10, 2024, A24 announced a tribute album for the Talking Heads concert film, featuring Paramore on one of the tracks. In february, Paramore confimred that they'd continue as a independent band after the end of their contract. In an interview, Hayley mentioned that Paramore has already started making new music, with demos made before they went on tour with Taylor Swift.",

        image: "/history/2024.png",
    },
    {
        id: "dot-2025",
        year: "2025",
        title: "Radio Silence",
        summary:
            "The band drops a 20th anniversary album but announces a break",
        description:
            "On July 25, 2025, the band released a deluxe digital edition of their debut album, 'All We Know is Falling' for its 20th anniversary. Later that year in an interview, Hayley mentions that Paramore was taking a break, but not gone forever, stating that they're 'known for taking long breaks.'",

        image: "/history/2025.png",
    },
];

export default function HistoryPage() {
    const [expandedId, setExpandedId] = useState(null);
    const handleClick = (id) => setExpandedId(expandedId === id ? null : id);

    return (
        <div className={styles.pageLayout}>
            <NextBtn
                backLabel='Previous: Meet the band'
                backHref='/Band'
                nextLabel='Next up: The Albums'
                nextHref='/Albums'
            />
            <div className={styles.topbar}>
                <Header value='History' />
            </div>
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
