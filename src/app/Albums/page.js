// app/albums/page.jsx
import Link from "next/link";
import AlbumsPile from "../components/AlbumPile/AlbumsPile";
import styles from "./main.module.css";
import NextBtn from "../components/NextBtn/NextBtn";
import Header from "../components/Header/Header";

export default function AlbumsPage() {
    const paramoreAlbums = [
        {
            id: "AllWeKnowIsFalling",
            title: "All We Know Is Falling",
            year: 2005,
            cover: "/Home/AllWeKnow.png",
        },
        { id: "Riot", title: "Riot!", year: 2007, cover: "/Home/Riot.png" },
        {
            id: "BrandNewEyes",
            title: "Brand New Eyes",
            year: 2009,
            cover: "/Home/BrandNew.png",
        },
        {
            id: "Paramore",
            title: "Paramore",
            year: 2013,
            cover: "/Home/Paramore.png",
        },
        {
            id: "AfterLaughter",
            title: "After Laughter",
            year: 2017,
            cover: "/Home/AfterLaughter.png",
        },
        {
            id: "ThisIsWhy",
            title: "This Is Why",
            year: 2023,
            cover: "/Home/ThisIsWhy.png",
        },
    ];

    return (
        <div>
            <Header value='The Albums' />
            <NextBtn
                backLabel='Previous: History'
                backHref='/History'
                nextLabel='Next up: Future'
                nextHref='/Future'
            />
            <main className={styles.main}>
                <AlbumsPile albums={paramoreAlbums} />
            </main>
        </div>
    );
}
