import React from "react";
import styles from "./page.module.css";
import Next from "./components/NextBtn/NextBtn";

export default function Home() {
    return (
        <div className={styles.page}>
            <Next
                nextLabel='Next up: Meet the Band'
                nextHref='/Band'
            />

            <main className={styles.main}></main>
        </div>
    );
}
