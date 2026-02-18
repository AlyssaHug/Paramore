import "./globals.css";
import AlbumMusic from "./components/Music/AlbumBackgroundMusic";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { benniter, notoSans, CrispyCream } from "./fonts";

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
                className={`${benniter.variable} ${notoSans.variable} ${CrispyCream.variable}`}>
                {children}
                <MusicPlayer />
                <AlbumMusic /> {/* ← plays only on album pages */}
            </body>
        </html>
    );
}
