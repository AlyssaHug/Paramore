"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./AlbumsPile.module.css";

const rotations = [-21, -14, -8, -3, 4, 11, 18, 24, -17, 9];

export default function AlbumsPile({ albums }) {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div className={styles.pileContainer}>
            {albums.map((album, i) => {
                const isHovered = hoveredId === album.id;

                // Responsive horizontal spacing
                const total = albums.length;
                const indexFromCenter = i - (total - 1) / 2;

                // Base spacing scales with screen size
                const baseSpacing =
                    typeof window !== "undefined" && window.innerWidth < 768
                        ? 110 + indexFromCenter * 90 // mobile: tighter
                        : 140 + indexFromCenter * 160; // desktop: wide & beautiful

                const randomX = (Math.random() - 0.5) * 70;
                const randomY = (Math.random() - 0.5) * 140;
                const rotate = rotations[i % rotations.length];

                return (
                    <Link
                        key={album.id}
                        href={`/Albums/${album.id}`}
                        className={styles.albumLink}
                        style={{
                            transform: `translate(${
                                baseSpacing + randomX
                            }px, ${randomY}px)`,
                            zIndex: isHovered ? 1000 : i + 10,
                        }}
                        onMouseEnter={() => setHoveredId(album.id)}
                        onMouseLeave={() => setHoveredId(null)}>
                        <div
                            className={`${styles.albumWrapper} ${
                                isHovered ? styles.hovered : ""
                            }`}
                            style={{ transform: `rotate(${rotate}deg)` }}>
                            <Image
                                src={album.cover}
                                alt={album.title}
                                width={380}
                                height={380}
                                className={styles.cover}
                                draggable={false}
                            />

                            {isHovered && (
                                <div className={styles.hoverOverlay}>
                                    <p className={styles.title}>
                                        {album.title}
                                    </p>
                                    <p className={styles.year}>{album.year}</p>
                                </div>
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
