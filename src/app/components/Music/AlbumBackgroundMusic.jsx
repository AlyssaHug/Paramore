// components/AlbumMusic.jsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const songs = {
    "/Albums/AfterLaughter": "/music/HardTimes.mp3",
    "/Albums/Riot": "/music/misery-business.mp3",
    "/Albums/AllWeKnowIsFalling": "/music/MyHeart.mp3",
    "/Albums/BrandNewEyes": "/music/TheOnlyException.mp3",
    "/Albums/Paramore": "/music/IntoYou.mp3",
    "/Albums/Riot": "/music/MiseryBusiness.mp3",
    "/Albums/ThisisWhy": "/music/Crave.mp3",
};

export default function AlbumMusic() {
    const pathname = usePathname();
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const song = songs[pathname];

        if (song) {
            // Force absolute URL (this is the #1 reason it fails silently)
            audio.src = song + "?v=" + Date.now(); // cache buster + forces reload
            audio.volume = 0.7;

            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch((e) => {
                    console.log("Autoplay blocked — waiting for click/tap");
                });
            }
        } else {
            audio.pause();
        }
    }, [pathname]);

    // Unlock audio on first user interaction (click anywhere)
    useEffect(() => {
        const unlock = () => {
            audioRef.current?.play().catch(() => {});
            document.body.removeEventListener("click", unlock);
            document.body.removeEventListener("touchstart", unlock);
        };
        document.body.addEventListener("click", unlock);
        document.body.addEventListener("touchstart", unlock);
    }, []);

    return (
        <audio
            ref={audioRef}
            loop
            preload="auto"
            playsInline
            style={{ position: "fixed", left: "-9999px" }}
        />
    );
}
