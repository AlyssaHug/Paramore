"use client";

import { useState, useEffect } from "react";
import styles from "./timeline.module.css";
import cn from "classnames";
import ModalPortal from "./ModalPortal";

export default function TimelineItem({
    entry,
    id,
    isExpanded,
    onClick,
    isEven,
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
            <div
                className={cn(
                    styles.row,
                    isVisible
                        ? isEven
                            ? styles.animateRight
                            : styles.animateLeft
                        : styles.hidden,
                    isHovered && styles.rowHover
                )}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                {/* LEFT */}
                <div className={styles.side}>
                    {!isEven && (
                        <button
                            onClick={onClick}
                            className={cn(
                                styles.card,
                                isHovered && styles.cardHover
                            )}>
                            {entry.image && (
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={entry.image}
                                        alt={entry.title}
                                        className={styles.cardImage}
                                    />
                                </div>
                            )}

                            <h3 className={styles.cardTitle}>{entry.title}</h3>
                            <p className={styles.cardDesc}>
                                {entry.description}
                            </p>
                            <div className={styles.cardCta}>
                                Click to explore
                            </div>
                        </button>
                    )}
                    {isEven && (
                        <div className={styles.oppositeYear}>{entry.year}</div>
                    )}
                </div>

                {/* CENTER */}
                <div
                    className={styles.center}
                    id={id}>
                    <button
                        onClick={onClick}
                        className={cn(
                            styles.paramoreBars,
                            isHovered && styles.paramoreBarsHover
                        )}>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        {isHovered && <div className={styles.pulseRing} />}
                    </button>
                </div>

                {/* RIGHT */}
                <div className={styles.side}>
                    {isEven && (
                        <button
                            onClick={onClick}
                            className={cn(
                                styles.card,
                                isHovered && styles.cardHover
                            )}>
                            {entry.image && (
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={entry.image}
                                        alt={entry.title}
                                        className={styles.cardImage}
                                    />
                                </div>
                            )}

                            <h3 className={styles.cardTitle}>{entry.title}</h3>
                            <p className={styles.cardDesc}>
                                {entry.description}
                            </p>
                            <div className={styles.cardCta}>
                                Click to explore
                            </div>
                        </button>
                    )}
                    {!isEven && (
                        <div className={styles.oppositeYear}>{entry.year}</div>
                    )}
                </div>
            </div>

            {/* MODAL */}
            {isExpanded && (
                <ModalPortal>
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
                            

                                {/* MAIN SIDE-BY-SIDE CONTENT */}
                                <div className={styles.modalMain}>
                                    {/* Image Left */}
                                    {entry.image && (
                                        <img
                                            src={entry.image}
                                            alt={entry.title}
                                            className={styles.modalImage}
                                        />
                                    )}

                                    {/* Text Right */}
                                    <div className={styles.modalText}>
                                        <h3 className={styles.modalTitle}>
                                            {entry.title}
                                        </h3>
                                        <p className={styles.modalDesc}>
                                            {entry.description}
                                        </p>

                                        {/* Details list (if you have any) */}
                                        {entry.details &&
                                            entry.details.length > 0 && (
                                                <div
                                                    className={
                                                        styles.modalDetails
                                                    }>
                                                    {entry.details.map(
                                                        (detail, i) => (
                                                            <div
                                                                key={i}
                                                                className={
                                                                    styles.detailItem
                                                                }
                                                                style={{
                                                                    animationDelay: `${
                                                                        i * 120
                                                                    }ms`,
                                                                }}>
                                                                <span
                                                                    className={
                                                                        styles.bullet
                                                                    }>
                                                                    Right Arrow
                                                                </span>
                                                                <span>
                                                                    {detail}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalPortal>
            )}
        </>
    );
}
