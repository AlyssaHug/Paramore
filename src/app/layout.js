import {   Sigmar, Noto_Sans } from "next/font/google";
import "./globals.css";
import AlbumMusic from "./components/Music/AlbumBackgroundMusic";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";



const sigmar = Sigmar({
    variable: "--font-display",   
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    adjustFontFallback: true,
});

const notoSans = Noto_Sans({
    variable: "--font-body",          
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata = {
    title: "Paramore Discography",
    title: "This is Paramore",
    icons: {
        icon: "/favicon.png",
    },
    description: "An E-Magazine created for a school project",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${notoSans.variable} ${sigmar.variable}`}>
                {children}
                <MusicPlayer />
                <AlbumMusic /> {/* ← plays only on album pages */}
            </body>
        </html>
    );
}
