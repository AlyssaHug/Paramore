"use client";
import React from "react";
import styles from "../NextBtn/NextBtn.module.css";

export default function Next({ href, value, target = "_self" }) {
    function handleClick() {
        if (href) {
            window.open(href, target);
            return;
        }
        if (onClick) {
            onClick();
        }
    }
    return (
        <div className={styles.btnRow}>
            <button
                onClick={handleClick}
                className={styles.nextBtn}>
                Next Up: {value}
            </button>
        </div>
    );
}
