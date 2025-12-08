"use client";
import React from "react";
import styles from "../BandBtn/BandBtn.module.css";

export default function BandMemberNext({
    href,
    value,
    target = "_self",
    leftIcon,
    rightIcon,
}) {
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
        <div
            onClick={handleClick}
            className={styles.bandBtn}>
            {leftIcon && <span className={styles.iconLeft}>{leftIcon}</span>}
            <span>{value}</span>
            {rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
        </div>
    );
}
