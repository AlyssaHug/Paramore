import localFont from "next/font/local";

export const benniter = localFont({
    src: [
        {
            path: "/fonts/BenniterTrialVersion.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "/fonts/BenniterTrialVersion.woff",
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
            path: "fonts/NotoSans.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "fonts/NotoSans.woff",
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
            path: "/fonts/CrispyCreamRegular.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "/fonts/CrispyCreamRegular.woff",
            weight: "normal",
            style: "normal",
        },
        {
            path: "/fonts/CrispyCream.otf",
            weight: "normal",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-crispy-cream",
});
