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
                nextHref='/History'
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
                     <p className={styles.desc}>Taylor York was born on December 17, 1989. He is currently 34 years old. Taylor has been in the band since 2007.</p>
                    <p className={styles.desc}>Described as the band's "glue" during difficult times, Taylor York is Paramore's cornerstone. Hailey has even called him the "heart of Paramore." He provides intricate guitar work and pop-punk energy. Not only is he a guitarist for the band, but he also is a key to creative songwriting, production, and arrangements.</p>
                     <p className={styles.desc}><span className={styles.funfact}>Fun Fact:</span> Taylor is apparently good at sports, being called a formidable opponent by fans who have played ping-pong with him.</p>
                </div>
            </div>
        </div>
    );
}
