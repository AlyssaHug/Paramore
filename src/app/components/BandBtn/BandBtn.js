"use client";

import { useRouter } from "next/navigation";
import styles from "./BandBtn.module.css"; // your styles

export default function BandMemberNext({
    backHref,
    nextHref,
    backValue,
    nextValue,
    backOnClick,
    nextOnClick,
    target = "_self",
}) {
    const router = useRouter();

    const handleBack = () => {
        if (backHref) {
            if (target === "_blank") {
                window.open(backHref, "_blank");
            } else {
                router.push(backHref); // smooth internal navigation
            }
        } else if (backOnClick) {
            backOnClick();
        }
    };

    const handleNext = () => {
        if (nextHref) {
            if (target === "_blank") {
                window.open(nextHref, "_blank");
            } else {
                router.push(nextHref); // smooth internal navigation
            }
        } else if (nextOnClick) {
            nextOnClick();
        }
    };

    return (
        <div className={styles.flip}>
            {/* left button */}
            <div
                onClick={handleBack}
                className={styles.bandBtn}>
                <svg
                    className={styles.iconLeft}
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='25'
                    viewBox='0 0 17 25'
                    fill='none'>
                    <path
                        d='M14.5 22.5001L2.5 12.5001L14.5 2.50012'
                        stroke='white'
                        strokeWidth='5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>

                <span className={styles.label}>{backValue}</span>
            </div>
            {/* right button */}
            <div
                onClick={handleNext}
                className={styles.bandBtn}>
                <span className={styles.label}>{nextValue}</span>
                <svg
                    className={styles.iconRight}
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='25'
                    viewBox='0 0 17 25'
                    fill='none'>
                    <path
                        d='M2.5 2.50012L14.5 12.5001L2.5 22.5001'
                        stroke='white'
                        strokeWidth='5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </div>
        </div>
    );
}
