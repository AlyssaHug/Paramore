import Link from "next/link";
import styles from "../Taylor/taylor.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Next Up: Their History'
                backLabel='Previous: Homepage'
                backHref='/'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <BandMemberNext
                        backHref='/Band/Zac'
                        backValue='Zac'
                        nextHref='/Band/Hayley'
                        nextValue='Hayley'
                    />
                    <div className={styles.header}>
                        <h1 className={styles.title}>Guitarist</h1>
                        <h2 className={styles.caption}>Taylor York</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Taylor/Closeup.png'
                        alt='Hayley Williams'
                    />
                    <img
                        className={styles.guitar}
                        src='/Band/Taylor/Guitar.png'
                        alt='Guitar graphic'
                    />
                    <p className={styles.spacer}>Taylor</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src='/Band/Taylor/Perform.webp'
                        alt='Taylor York playing the guitar during a performace.'
                    />
                    <p className={styles.desc}>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
