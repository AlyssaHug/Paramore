"use client";

import Link from "next/link";
import styles from "./BandBtn.module.css"; // your styles

export default function BandMemberNext({ href, value, leftIcon, rightIcon }) {
    return (
        <Link
            href={href}
            className={styles.bandBtn}
            prefetch={true}>
            {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
            <span className={styles.label}>{value}</span>
            {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
        </Link>
    );
}
