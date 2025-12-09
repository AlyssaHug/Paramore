// app/template.js
import PageTransition from "@/app/components/FadeTransition/FadeTransition";

export default function Template({ children }) {
    return <PageTransition>{children}</PageTransition>;
}
