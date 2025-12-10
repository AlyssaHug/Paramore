import React from "react";
import styles from "./page.module.css";
import Next from "./components/NextBtn/NextBtn";
import Header from "./components/Header/Header";
import AlbumCarousel from "./components/Carousel/Carousel";
import ScrollText from "@/app/components/ScrollText/ScrollText";

export default function Home() {
    return (
        <div className={styles.page}>
            <Next
                nextLabel='Next up: Meet the Band'
                nextHref='/Band'
            />

            <main className={styles.main}>
                <Header value='Homepage' />
                <div className={styles.cover}>
                    <h1 className={styles.title}>
                        <span className={styles.span}>This is</span> Paramore
                    </h1>
                    <img
                        className={styles.coverImg}
                        src='/Home/onstage.jpg'
                        alt='Playing onstage'
                    />
                </div>
                <div className={styles.divider}>"paramour" 'Secret Lover'</div>
                <AlbumCarousel />
                <ScrollText
                    text='Pressure • Misery Business • The Only Exception • Still Into You • Hard Times • This is Why'
                    direction='left'
                    speed={35}
                />
                <img
                    className={styles.footer}
                    src='/Home/waving.jpeg'
                    alt='paramore members waving at crowd'
                />
            </main>
        </div>
    );
}
