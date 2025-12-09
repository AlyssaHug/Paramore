import Link from "next/link";
import styles from "../Hayley/hayley.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";
import ScrollText from "@/app/components/ScrollText/ScrollText";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Their History'
                backLabel='Previous: HomePage'
                backHref='/'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <BandMemberNext
                        nextHref='/Band/Zac'
                        nextValue='Zac'
                        backHref='/Band/Taylor'
                        backValue='Taylor'
                    />

                    <div className={styles.header}>
                        <h1 className={styles.title}>Singer</h1>
                        <h2 className={styles.caption}>Hayley Williams</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Hayley/Closeup.png'
                        alt='Hayley Williams'
                    />
                    <img
                        className={styles.mic}
                        src='/Band/Hayley/Mic.png'
                        alt='microphone graphic'
                    />
                    <p className={styles.spacer}>Hayley</p>
                </div>
                <div className={styles.rightHug}>
                    <div className={styles.ScrollDiv}>
                        <ScrollText
                            text='Pressure • Misery Business • The Only Exception • Still Into You • Hard Times • This is Why'
                            direction='left'
                            speed={35}
                        />
                    </div>
                    <div className={styles.right}>
                        <img
                            className={styles.perform}
                            src='/Band/Hayley/Perform.png'
                            alt='Hayley singing on stage opening for Taylor Swift'
                        />
                        <p className={styles.desc}>
                            Hayley is the voice and face of Paramore. She’s the
                            lead vocalist and primary lyricist, shaping the
                            emotional direction of the band. The writing of the
                            songs often comes from her personal experiences,
                            vulnerability, resilience, and growth. Driving the
                            thematic heart of each album, she sets the tone for
                            the band’s evolution.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
