import styles from "@/app/Future/future.module.css";
import NextBtn from "../components/NextBtn/NextBtn";
import ScrollText from "../components/ScrollText/ScrollText";
import Header from "../components/Header/Header";

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <Header value="The Present" />
            <div className={styles.head}>
                <NextBtn
                    nextLabel="Next Up: Thank you"
                    nextHref="/ThankYou"
                    backLabel="Previous: Albums"
                    backHref="/Albums"
                />
                   <img
                    className={styles.interview}
                    src="/Future/interview.png"
                    alt="Picture of Hayley, Taylor, and Zac on the couch in an interview"
                />

                <div className={styles.column}>
                    <div className={styles.header}>
                        <p className={styles.title}>Where are they now?</p>
                    </div>
                    
                    <p className={styles.bodyText}>
                        Their most recent release was their 20th anniversary
                        edition of their debut album, “All we know is falling”
                        in July 2025. As of September 2025, the band has
                        announced their on a break for the moment, not broken
                        up. With their 20-year label contract having expired,
                        the members are exploring what they are as a band and
                        who they are as people outside of their contract. With
                        the breaks between albums being long previously, this is
                        normal for the band, so they can also live their lives
                        as individuals.
                    </p>
                </div>

             
                <div className={styles.pageColumn}></div>
            </div>
            <div className={styles.divider}>Their Solo Journeys</div>
            <div className={styles.artistbg}>
            <div className={styles.hayley}>
                <img
                    className={styles.hayleyImg}
                    src="/Future/hayley.png"
                    alt="Hayley in a bridal dress with food and drinks around her from her solo tour poster"
                />
                <div className={styles.hayleyText}>
                    <h2 className={styles.hayleySubhead}>
                        Hayley Williams<span className={styles.subName}> Third Solo Album</span>
                    </h2>
                    <p className={styles.subText}>
                        In August 2025, Hayley released a surprise collection of
                        17 songs, which were later packaged as the album “Ego
                        Death at a Bachelorette Party” in November with 3 other
                        tracks. She has announced her first solo shows for 2026,
                        something she tried doing for her prior solo work in
                        2020/2021 but couldn’t due to the pandemic. She is
                        currently working through finding herself outside the
                        identity of Paramore with her solo venture.
                    </p>
                </div>
            </div>
            <ScrollText text="Ego Death at a bachelorette party" />
            <div className={styles.zac}>
                <div className={styles.zacText}>
                    <h2 className={styles.zacSubhead}>
                        Zac Farro<span className={styles.subName}> Debut Solo Album</span>
                    </h2>
                    <p className={styles.subText}>
                        In July 2025, Zac released his debut solo album under
                        his own name. His album “Operator”, explores themes like
                        nostalgia, love, grief, and communication, different
                        from his prior work in Paramore. This music allows him
                        to also explore who he is outside of the band, showing a
                        different side to himself.
                    </p>
                </div>
                <img
                    className={styles.zacImg}
                    src="/Future/zac.jpg"
                    alt="/"
                />
            </div>
            <ScrollText text="Operator • Operator" />
            <div className={styles.taylor}>
                <img
                    className={styles.taylorImg}
                    src="/Future/taylor.jpg"
                    alt="Taylor York holding a guitar posing for a photo"
                />
                <div className={styles.taylorText}>
                    <h2 className={styles.taylorSubhead}>
                        Taylor York <span className={styles.subName}>Low Profile</span>
                    </h2>
                    <p className={styles.subText}>
                        With the band's wiped social media presence earlier in
                        the year, there was uncertainty with its members. But in
                        September 2025, Taylor re-launched his instagram page
                        listing himself as the band’s guitarist, confirming he
                        remains part of the band. Other than his instagram
                        reboot, his public activity has been minimal, with no
                        links to any side-projects or music this year. The
                        band's break has allowed him to step back for awhile.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}
