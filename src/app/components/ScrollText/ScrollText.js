import styles from "../ScrollText/ScrollText.module.css";

export default function ScrollText({
    text,
    direction = "left", // 'left' | 'right' | 'up' | 'down'
    speed = 30, // seconds per full loop
    className = "", // optional extra class for custom styling per page
}) {
    // Repeat enough times for seamless loop
    const repeated = (text + "     •     ").repeat(
        direction === "up" || direction === "down" ? 10 : 8
    );

    return (
        <div className={`${styles.container} ${className}`}>
            <div
                className={`${styles.track} ${styles[direction]}`}
                style={{ "--speed": `${speed}s` }}>
                <span>{repeated}</span>
            </div>

            {/* Edge fades – only show for horizontal */}
            {(direction === "left" || direction === "right") && (
                <>
                    <div className={styles.fadeLeft} />
                    <div className={styles.fadeRight} />
                </>
            )}
            {(direction === "up" || direction === "down") && (
                <>
                    <div className={styles.fadeTop} />
                    <div className={styles.fadeBottom} />
                </>
            )}
        </div>
    );
}
