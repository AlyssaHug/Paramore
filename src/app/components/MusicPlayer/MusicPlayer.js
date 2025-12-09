"use client";
import styles from "../MusicPlayer/MusicPlayer.module.css";
import { useState } from "react";

export default function MusicPlayer() {
    const [isOpen, setIsOpen] = useState(false);

    const samples = [
        { track: "Misery Business", album: "Riot!" },
        { track: "Still Into You", album: "Paramore" },
        { track: "Ain't It Fun", album: "Paramore" },
        { track: "The Only Exception", album: "Brand New Eyes" },
        { track: "Hard Times", album: "After Laughter" },
        { track: "This Is Why", album: "This Is Why" },
    ];

    const [currentTrack, setCurrentTrack] = useState("Misery Business");
    const [currentAlbum, setCurrentAlbum] = useState("Riot!");

    const handleRefreshTrack = () => {
        const random = Math.floor(Math.random() * samples.length);
        setCurrentTrack(samples[random].track);
        setCurrentAlbum(samples[random].album);
    };

    return (
        <>
            {/* Floating Tab */}
            <div
                className={styles.tab}
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                role='button'
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setIsOpen(!isOpen)}
                aria-label='Toggle Paramore Music Player'>
                <span className={styles.tabText}>Music</span>
            </div>

            {/* Slide-in Panel */}
            <div
                className={`${styles.vinylPlayer} ${isOpen ? styles.open : ""}`}
                onMouseLeave={() => setIsOpen(false)}>
                <div className={styles.embed}>
                    <iframe
                        src='https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4bEkUM?utm_source=generator&theme=0&autoplay=1&loop=1&mute=1'
                        width='100%'
                        height='152'
                        frameBorder='0'
                        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                        loading='lazy'
                        title='Paramore Radio'
                    />
                </div>
            </div>
        </>
    );
}
