import Link from "next/link";
import styles from "../Hayley/hayley.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Next up: Their History'
                backLabel='Previous: HomePage'
                backHref='/'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <BandMemberNext
                        backHref='/Band/Taylor'
                        backValue='Taylor'
                        nextHref='/Band/Zac'
                        nextValue='Zac'
                    />
                    <div className={styles.header}>
                        <h1 className={styles.title}>Singer</h1>
                        <h2 className={styles.caption}>Hayley Williams</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Hayley/Close-up.png'
                        alt='Hayley Williams'
                    />
                    <img
                        className={styles.mic}
                        src='/Band/Hayley/Mic.png'
                        alt='microphone graphic'
                    />
                    <p className={styles.spacer}>Hayley</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src='/Band/Hayley/Perform.png'
                        alt='Hayley singing on stage opening for Taylor Swift'
                    />
                    <p className={styles.desc}>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
