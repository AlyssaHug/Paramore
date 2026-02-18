// lib/fonts.js
import localFont from "next/font/local";

export const benniter = localFont({
    src: [
        {
            path: "../public/fonts/BenniterTrialVersion.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../public/fonts/BenniterTrialVersion.woff",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-benniter", // optional but useful
});

export const notoSans = localFont({
    src: [
        {
            path: "../public/fonts/NotoSans.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../public/fonts/NotoSans.woff",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-noto-sans",
});

export const crispyCream = localFont({
    src: [
        {
            path: "../public/fonts/CrispyCreamRegular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../public/fonts/CrispyCreamRegular.woff",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../public/fonts/CrispyCream.otf",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-crispy-cream",
});
