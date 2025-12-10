// app/components/MusicPlayer/MusicPlayer.js   (or wherever you keep it)
"use client";

import styles from "./MusicPlayer.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Detect if we're on an individual album page → /albums/something
  const isOnAlbumPage = pathname.startsWith("/albums/") && pathname.split("/").length > 2;

  // Auto-close the player when entering an album page
  useEffect(() => {
    if (isOnAlbumPage) setIsOpen(false);
  }, [isOnAlbumPage]);

  // Build the iframe src correctly — autoplay only when NOT on album page
  const iframeSrc = `https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO4bEkUM?utm_source=generator&theme=0&autoplay=${
    isOnAlbumPage ? "0" : "1"
  }&loop=1&mute=1`;

  return (
    <>
      {/* Floating Tab */}
      <div
        className={styles.tab}
        onClick={() => !isOnAlbumPage && setIsOpen(!isOpen)}
        onMouseEnter={() => !isOnAlbumPage && setIsOpen(true)}
        style={{ opacity: isOnAlbumPage ? 0.4 : 1, cursor: isOnAlbumPage ? "default" : "pointer" }}
        role="button"
        tabIndex={0}
        aria-label="Toggle Paramore Music Player"
      >
        <span className={styles.tabText}>Music</span>
      </div>

      {/* Slide-in Panel */}
      <div
        className={`${styles.vinylPlayer} ${isOpen ? styles.open : ""}`}
        onMouseLeave={() => setIsOpen(false)}
        style={{
          pointerEvents: isOnAlbumPage ? "none" : "auto",
          opacity: isOnAlbumPage ? 0.5 : 1,
        }}
      >
        <div className={styles.embed}>
          <iframe
            src={iframeSrc}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Paramore Radio"
          />
        </div>
      </div>
    </>
  );
}