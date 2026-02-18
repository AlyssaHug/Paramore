import "./globals.css";
import { Noto_Sans } from "next/font/google";
import AlbumMusic from "./components/Music/AlbumBackgroundMusic";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { benniter, notoSans, crispyCream } from "../lib/fonts";

const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // choose what you actually use
    display: "swap", // looks good while loading
    variable: "--font-body", // optional – if you want CSS variables
});

export const metadata = {
    title: "Paramore Discography",
    title: "This is Paramore",
    icons: {
        icon: "/favicon.png", // This is the modern way
    },
    description: "An E-Magazine created for a school project",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`${benniter.variable} ${notoSans.variable} ${crispyCream.variable}`}>
                {children}
                <MusicPlayer />
                <AlbumMusic /> {/* ← plays only on album pages */}
            </body>
        </html>
    );
}
