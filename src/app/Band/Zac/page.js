import Link from "next/link";
import styles from "../Zac/zac.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel="Next Up: Their History"
                backLabel="Previous: Homepage"
                backHref="/"
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <BandMemberNext
                        backHref="/Band/Hayley"
                        backValue="Hayley"
                        nextHref="/Band/Taylor"
                        nextValue="Taylor"
                    />

                    <div className={styles.header}>
                        <h1 className={styles.title}>Drummer</h1>
                        <h2 className={styles.caption}>Zac Farro</h2>
                    </div>
                    <img
                        className={styles.close}
                        src="/Band/Zac/Closeup.png"
                        alt="Zac Farro"
                    />
                    <img
                        className={styles.drums}
                        src="/Band/Zac/drums.png"
                        alt="Drum set
                         graphic"
                    />
                    <p className={styles.spacer}>Zac</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src="/Band/Zac/Perform.jpg"
                        alt="Zac playing the drums"
                    />
                    <p className={styles.desc}>
                        Zac Farro was born on June 4, 1990. Currently, he is 33
                        years old. His family moved to Franklin, Tennessee,
                        where he met Hayley Williams through a homeschool
                        program.
                    </p>
                    <p className={styles.desc}>
                        Zac is Paramore’s backbone as the drummer. As one of the
                        founding members, he brings a signature style that’s
                        carried throughout their albums. While keeping in time,
                        he shapes the personality of each track. Beyond playing
                        the drums, he also contributes to the band’s writing in
                        later albums and its energy.
                    </p>
                    <p className={styles.desc}><span className={styles.funfact}>Fun Fact:</span> He was the youngest in the band and started touring with them when he was only 14. He along with his older brother Josh Farro, were part of Paramore's original lineup along with Hayley Williams and Jeremy Davis</p>
                </div>
            </div>
        </div>
    );
}
