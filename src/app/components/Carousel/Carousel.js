"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../Carousel/Carousel.module.css";

// Your albums – add/remove as many as you want
const albums = [
    { id: 1, title: "All we know is falling", src: "/Home/AllWeKnow.png" },
    { id: 2, title: "Riot!", src: "/Home/Riot.png" },
    { id: 3, title: "Brand New Eyes", src: "/Home/BrandNew.png" },
    { id: 4, title: "Paramore", src: "/Home/Paramore.png" },
    { id: 5, title: "After Laughter", src: "/Home/AfterLaughter.png" },
    { id: 6, title: "This is Why", src: "/Home/thisIsWhy.png" },
];

export default function AlbumCarousel() {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i === 0 ? albums.length - 1 : i - 1));
    const next = () => setIndex((i) => (i === albums.length - 1 ? 0 : i + 1));

    return (
        <div className={styles.container}>
            {/* Background */}
            <div>
                <img
                    className={styles.background}
                    src='/Home/crowd.jpeg'
                    alt='background of crowd cheering'
                />
                <div className={styles.overlay} />
            </div>

            {/* Carousel */}
            <div className={styles.carouselWrapper}>
                <div className={styles.carousel}>
                    {albums.map((album, i) => {
                        const offset = i - index;
                        const distance = Math.min(Math.abs(offset));

                        return (
                            <motion.div
                                key={album.id}
                                className={`${styles.album} ${
                                    distance === 0
                                        ? styles.active
                                        : distance === 1
                                        ? styles.near
                                        : styles.far
                                }`}
                                animate={{
                                    x: (i - index) * 280,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                onClick={() => setIndex(i)}>
                                <div className={styles.albumInner}>
                                    <img
                                        src={album.src}
                                        alt={album.title}
                                        className={styles.albumImage}
                                    />
                                    {i === index && (
                                        <div className={styles.glowRing} />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Title Pill */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={styles.titlePillWrapper}>
                    <button
                        onClick={prev}
                        className={styles.pillArrowLeft}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='34'
                            height='28'
                            viewBox='0 0 34 28'
                            fill='none'>
                            <path
                                d='M13.6667 25.3333L1.99999 13.6667L13.6667 2M31.1667 25.3333L19.5 13.6667L31.1667 2'
                                stroke='white'
                                strokeWidth='4'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>

                    <div className={styles.titlePill}>
                        <h2>{albums[index].title}</h2>
                    </div>

                    <button
                        onClick={next}
                        className={styles.pillArrowRight}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='34'
                            height='28'
                            viewBox='0 0 34 28'
                            fill='none'>
                            <path
                                d='M19.5 2L31.1667 13.6667L19.5 25.3333M2 2L13.6667 13.6667L2 25.3333'
                                stroke='white'
                                strokeWidth='4'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </button>
                </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
                onClick={prev}
                className={styles.arrowLeft}>
                〈
            </button>
            <button
                onClick={next}
                className={styles.arrowRight}>
                〉
            </button>
        </div>
    );
}
