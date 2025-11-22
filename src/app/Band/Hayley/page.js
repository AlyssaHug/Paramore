import Link from "next/link";
import styles from "../Hayley/hayley.module.css";

export default function Page() {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
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
            </div>
            <p className={styles.spacer}>Hayley</p>
            <div className={styles.right}></div>
        </div>
    );
}
