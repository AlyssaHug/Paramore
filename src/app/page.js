"use client";
import React from "react";
import styles from "./page.module.css";
import Next from "./components/NextBtn/NextBtn";
import Header from "./components/Header/Header";
import AlbumCarousel from "./components/Carousel/Carousel";
import ScrollText from "@/app/components/ScrollText/ScrollText";

function fireConfetti() {
    const confetti = document.createElement("canvas");
    confetti.style.position = "fixed";
    confetti.style.top = "0";
    confetti.style.left = "0";
    confetti.style.width = "100%";
    confetti.style.height = "100%";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "999999";

    confetti.width = window.innerWidth;
    confetti.height = window.innerHeight;
    document.body.appendChild(confetti);

    const ctx = confetti.getContext("2d");
    const pieces = [];
    const colors = ["#ffffff", "#000000", "#ff7a00"];

    // Your perfect gap-free chubby heart
    function drawHeart(size, color) {
        const s = size * 0.5;
        const topCurveHeight = s * 0.6;

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, topCurveHeight);

        ctx.bezierCurveTo(0, 0, -s, 0, -s, topCurveHeight);
        ctx.bezierCurveTo(-s, s * 2, -s * 0.3, s * 2.4, 0, s * 2.3);
        ctx.bezierCurveTo(s * 0.3, s * 2.4, s, s * 2, s, topCurveHeight);
        ctx.bezierCurveTo(s, 0, 0, 0, 0, topCurveHeight);

        ctx.closePath();
        ctx.fill();
    }

    for (let i = 0; i < 200; i++) {
        pieces.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            size: Math.random() * 18 + 14,   // perfect sweet spot: ~14–32px

            speedX: (Math.random() - 0.5) * 5,
            speedY: (Math.random() - 0.5) * 5,

            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 6,

            color: colors[Math.floor(Math.random() * colors.length)],

            opacity: 0,
            delay: Math.random() * 400,
        });
    }

    const startTime = performance.now();

    function animate(time) {
        const elapsed = time - startTime;
        ctx.clearRect(0, 0, confetti.width, confetti.height);

        pieces.forEach(p => {
            if (elapsed > p.delay) p.opacity = Math.min((elapsed - p.delay) / 300, 1);

            p.x += p.speedX * 0.8;
            p.y += p.speedY * 0.8;
            p.speedY += 0.08;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            drawHeart(p.size, p.color);
            ctx.restore();
        });

        if (pieces.some(p => p.opacity > 0 && p.y < confetti.height + 200)) {
            requestAnimationFrame(animate);
        } else {
            confetti.parentNode && document.body.removeChild(confetti);
        }
    }

    requestAnimationFrame(animate);
}

export default function Home() {
    return (
        <div className={styles.page}>
            <Next
                nextLabel="Next up: Meet the Band"
                nextHref="/Band"
            />

            <main className={styles.main}>
                <Header value="Homepage"/>
                <div className={styles.cover}>
                    <h1 className={styles.title}>
                        <span className={styles.span}>This is</span> Paramore
                    </h1>
                    <img
                        className={styles.coverImg}
                        src="/Home/onstage.jpg"
                        alt="Playing onstage"
                    />
                </div>
                <div
                    className={styles.divider}
                    onClick={() => fireConfetti()}>
                    "paramour" 'Secret Lover'
                </div>
                <AlbumCarousel />
                <ScrollText
                    text="Pressure • Misery Business • The Only Exception • Still Into You • Hard Times • This is Why"
                    direction="left"
                    speed={35}
                />
                <img
                    className={styles.footer}
                    src="/Home/waving.jpeg"
                    alt="paramore members waving at crowd"
                />
            </main>
        </div>
    );
}
