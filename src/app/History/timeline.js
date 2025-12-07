"use client";

import { useState, useEffect } from "react";
import styles from "./timeline.module.css";
import cn from "classnames";

export default function TimelineItem({
    entry,
    isExpanded,
    onClick,
    isEven, // true = even index → card on RIGHT, year on LEFT
    index,
}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 150);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <>
            {/* ROW */}
            <div
                className={cn(
                    styles.row,
                    isVisible
                        ? isEven
                            ? styles.animateRight
                            : styles.animateLeft
                        : styles.hidden
                )}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {/* LEFT COLUMN — card on odd entries, year on even entries */}
                <div className={styles.side}>
                    {/* Card when NOT even (odd index) */}
                    {!isEven && (
                        <button
                            onClick={onClick}
                            className={cn(
                                styles.card,
                                isHovered && styles.cardHover
                            )}>
                            <div className={styles.mobileYear}>
                                {entry.year}
                            </div>
                            <h3 className={styles.cardTitle}>{entry.title}</h3>
                            <p className={styles.cardDesc}>
                                {entry.description}
                            </p>
                            <div className={styles.cardCta}>
                                Click to explore
                            </div>
                        </button>
                    )}

                    {/* Year when EVEN (card is on the right) */}
                    {isEven && (
                        <div className={styles.oppositeYear}>{entry.year}</div>
                    )}
                </div>

                {/* CENTER DOT + LINE */}
                <div className={styles.center}>
                    <button
                        onClick={onClick}
                        className={cn(
                            styles.dot,
                            isHovered && styles.dotHover
                        )}>
                        {isHovered && <div className={styles.pulse} />}
                    </button>
                </div>

                {/* RIGHT COLUMN — card on even entries, year on odd entries */}
                <div className={styles.side}>
                    {/* Card when EVEN */}
                    {isEven && (
                        <button
                            onClick={onClick}
                            className={cn(
                                styles.card,
                                isHovered && styles.cardHover
                            )}>
                            <div className={styles.mobileYear}>
                                {entry.year}
                            </div>
                            <h3 className={styles.cardTitle}>{entry.title}</h3>
                            <p className={styles.cardDesc}>
                                {entry.description}
                            </p>
                            <div className={styles.cardCta}>
                                Click to explore
                            </div>
                        </button>
                    )}

                    {/* Year when ODD (card is on the left) */}
                    {!isEven && (
                        <div className={styles.oppositeYear}>{entry.year}</div>
                    )}
                </div>
            </div>

            {/* FULL-SCREEN MODAL */}
            {isExpanded && (
                <>
                    <div
                        className={styles.backdrop}
                        onClick={onClick}
                    />
                    <div className={styles.modalOverlay}>
                        <div
                            className={styles.modal}
                            onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={onClick}
                                className={styles.closeBtn}>
                                ×
                            </button>
                            <div className={styles.modalContent}>
                                <div className={styles.modalYear}>
                                    {entry.year}
                                </div>
                                <h2 className={styles.modalTitle}>
                                    {entry.title}
                                </h2>
                                <p className={styles.modalDesc}>
                                    {entry.description}
                                </p>
                                <div className={styles.modalDetails}>
                                    {entry.details.map((detail, i) => (
                                        <div
                                            key={i}
                                            className={styles.detailItem}
                                            style={{
                                                animationDelay: `${i * 100}ms`,
                                            }}>
                                            <span className={styles.bullet}>
                                                Right Arrow
                                            </span>
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.modalFooter}>
                                    Click anywhere to close
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
