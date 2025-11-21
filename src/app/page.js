import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Link href='/Band'>
                    <button>Go to Band Page</button>
                </Link>
                 <Link href='/History'>
                    <button>Go to History Page</button>
                </Link>
            </main>
        </div>
    );
}
