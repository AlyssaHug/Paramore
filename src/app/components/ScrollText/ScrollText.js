import styles from "../ScrollText/ScrollText.module.css";

export default function ScrollText({ text, direction = "left", speed = 30 }) {
    // Duplicate the text many times so the loop is seamless
    const repeatedText = (text + "     •     ").repeat(8);

    return (
        <div className={styles.marqueeContainer}>
            <div
                className={`${styles.marquee} ${
                    direction === "right" ? styles.reverse : ""
                }`}
                style={{ "--speed": `${speed}s` }}>
                <span>{repeatedText}</span>
            </div>

            {/* Edge fades – makes it look premium */}
            <div className={styles.fadeLeft} />
            <div className={styles.fadeRight} />
        </div>
    );
}
