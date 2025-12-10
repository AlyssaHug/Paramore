import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import AlbumMusic from "./components/Music/AlbumBackgroundMusic";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const notoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"], // choose what you actually use
    display: "swap", // looks good while loading
    variable: "--font-body", // optional – if you want CSS variables
});

export const metadata = {
    title: "Paramore Discography",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <AlbumMusic/> {/* ← plays only on album pages */}
            </body>
        </html>
    );
}
