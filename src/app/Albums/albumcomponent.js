"use client";

import React from "react";
import styles from "./album.module.css";

const AlbumComponent = ({
    title = "ALBUM NAME",
    subheader = "SUBHEADER",
    backgroundImage = "/Albums/allweknowisfalling.png" /* test image for now!!! */,
    albumCoverImage = "/Albums/allweknowisfallingvinyl.jpg" /* test image for now!!! */,
    currentSong = "Song Name",
    albumInfo = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    songLyrics = "idk for now it's this? idk for now it's this? idk for now it's this? idk for now it's this? idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?idk for now it's this?",
    onClose,
}) => {
    return (
        <div className={styles.albumPage}>
          <div 
                className={styles.backBtn} 
                onClick={() => window.history.back()}   // or router.back() if you import useRouter
            >
                x
            </div>
            
            {/* Background */}
            <div
                className={styles.albumBg}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            <div className={styles.topbarInner}>Album info</div>

            <div className={styles.albumContent}>
                {/* Hero */}
                <header className={styles.albumTop}>
                    <h1 className={styles.albumTitle}>{title}</h1>
                    <h2 className={styles.albumSubheader}>{subheader}</h2>

                    <div className={styles.nowPlaying}>
                        <span className={styles.nowPlayingTitle}>
                            NOW PLAYING:
                        </span>
                        <span className={styles.nowPlayingSong}>
                            {currentSong}
                        </span>
                        <div className={styles.nowPlayingSoundWave}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </header>

                {/* Middle Section */}
                <section className={styles.albumMiddle}>
                    <div className={styles.albumMiddleGrid}>
                        <div className={styles.albumMiddleText}>
                            <div className={styles.tracklist}>
                                {albumInfo.split("•").map((track, i) => (
                                    <div key={i}>
                                        {String(i + 1).padStart(2, "0")}{" "}
                                        {track.trim()}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.vinylContainer}>
                            {/* 1. Customizable SLEEVE (this is the actual album cover) */}
                            <div
                                className={styles.vinylSleeve}
                                style={{
                                    backgroundImage: `url(${albumCoverImage})`,
                                }}
                            />

                            {/* 2. Black vinyl disc sliding out from behind */}
                            <div className={styles.vinylDisc}>
                                <div className={styles.vinylGroove}></div>

                                <div className={styles.vinylHole}></div>
                            </div>
                        </div>
                    </div>

                    {/* Lyrics Marquee */}
                    <div className={styles.scrollText}>
                        <div className={styles.scroll}>
                            <span>{songLyrics} </span>
                            <span>{songLyrics} </span>
                            <span>{songLyrics} </span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AlbumComponent;
