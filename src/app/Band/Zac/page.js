import Link from "next/link";
import styles from "../Zac/zac.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Next Up: Their History'
                backLabel='Previous: Homepage'
                backHref='/'
                nextHref='/History'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <BandMemberNext
                        backHref='/Band/Hayley'
                        backValue='Hayley'
                        nextHref='/Band/Taylor'
                        nextValue='Taylor'
                    />

                    <div className={styles.header}>
                        <h1 className={styles.title}>Drummer</h1>
                        <h2 className={styles.caption}>Zac Farro</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Zac/Closeup.png'
                        alt='Zac Farro'
                    />
                    <img
                        className={styles.drums}
                        src='/Band/Zac/drums.png'
                        alt='Drum set
                         graphic'
                    />
                    <p className={styles.spacer}>Zac</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src='/Band/Zac/Perform.jpg'
                        alt='Zac playing the drums'
                    />
                    <p className={styles.desc}>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
