"use client";
import ScrollText from "../components/ScrollText/ScrollText";
import styles from "./page.module.css";
import NextBtn from "../components/NextBtn/NextBtn";

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

    for (let i = 0; i < 200; i++) {
        pieces.push({
            x: Math.random() * confetti.width,
            y: Math.random() * confetti.height,
            size: Math.random() * 20 + 10,

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

        pieces.forEach((p) => {
            if (elapsed > p.delay) {
                p.opacity = Math.min((elapsed - p.delay) / 300, 1);
            }

            p.x += p.speedX * 0.8;
            p.y += p.speedY * 0.8;
            p.speedY += 0.08;
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.globalAlpha = p.opacity;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
        });

        if (pieces.some((p) => p.opacity > 0 && p.y < confetti.height + 200)) {
            requestAnimationFrame(animate);
        } else {
            document.body.removeChild(confetti);
        }
    }

    requestAnimationFrame(animate);
}

export default function thankYou() {
    return (
        <div className={styles.wholepage}>
            <NextBtn
                backLabel='Previous: Future'
                backHref='/Future'
                nextLabel='Next Up: HomePage'
                nextHref='/'
            />
            <div
                className={styles.topbarInner}
                onClick={() => fireConfetti()}>
                See You later
            </div>
            <div className={styles.header}>
                <p className={styles.title}>Paramore</p>
                <p className={styles.thanks}>Thank You</p>
                <p className={styles.us}>Alyssa Huggins & Thea Calaquian</p>
            </div>
            <div className={styles.images}>
                <img
                    src='/thanks/one.jpg'
                    className={styles.img1}></img>
                <img
                    src='/thanks/two.jpg'
                    className={styles.img2}></img>
                <img
                    src='/thanks/three.jpg'
                    className={styles.img3}></img>
            </div>

            <div className={styles.scrollText}>
                <ScrollText text='Thank you • Thank you' />
            </div>
        </div>
    );
}
