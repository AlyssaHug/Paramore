// src/app/fonts.js
import localFont from "next/font/local";

// Paths are RELATIVE TO THIS FILE (sibling folder = ./filename)
export const benniter = localFont({
    src: [
        {
            path: "./BenniterTrialVersion.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "./BenniterTrialVersion.woff",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-benniter",
});

export const notoSans = localFont({
    src: [
        { path: "./NotoSans.woff2", weight: "normal", style: "normal" },
        { path: "./NotoSans.woff", weight: "normal", style: "normal" },
    ],
    display: "swap",
    variable: "--font-noto-sans",
});

export const crispyCream = localFont({
    src: [
        {
            path: "./CrispyCreamRegular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "./CrispyCreamRegular.woff",
            weight: "normal",
            style: "normal",
        },
        { path: "./CrispyCream.otf", weight: "normal", style: "normal" },
    ],
    display: "swap",
    variable: "--font-crispy-cream",
});
