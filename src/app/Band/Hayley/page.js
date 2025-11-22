import Link from "next/link";
import styles from "../Hayley/hayley.module.css";

export default function Page() {
    return (
        <div className={styles.content}>
            <div className={styles.left}>
                <h1>Singer</h1>
                <h2>Hayley Williams</h2>
            </div>
            <div className={styles.right}></div>
        </div>
    );
}
