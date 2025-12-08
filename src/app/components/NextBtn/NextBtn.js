"use client";

import { useRouter } from "next/navigation";
import styles from "./NextBtn.module.css";

export default function NextBtn({
    backHref,
    backOnClick,
    backLabel,

    nextHref,
    nextOnClick,
    nextLabel,

    target = "_self", // "_self" or "_blank" only for external links
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
        <div className={styles.btnRow}>
            <button
                onClick={handleBack}
                className={styles.backBtn}>
                {backLabel}
            </button>

            <button
                onClick={handleNext}
                className={styles.nextBtn}>
                {nextLabel}
            </button>
        </div>
    );
}
