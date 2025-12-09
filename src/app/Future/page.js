import styles from "@/app/Future/future.module.css";
import NextBtn from "../components/NextBtn/NextBtn";
import ScrollText from "../components/ScrollText/ScrollText";

export default function Page() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <NextBtn
                    nextLabel='Next Up: Thank you'
                    nextHref='/End'
                    backLabel='Previous: Albums'
                    backHref='/Albums'
                />
                <div className={styles.scroll}>
                    <ScrollText text='idk something rendom to fill' />
                </div>
                <div className={styles.column}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>The Present</h1>
                        <p className={styles.caption}>Where are they now?</p>
                    </div>
                    <p className={styles.bodyText}>bla bla blahhhhhh</p>
                </div>

                <img
                    className={styles.interview}
                    src='/Future/interview.png'
                    alt='Picture of Hayley, Taylor, and Zac on the couch in an interview'
                />
                <div className={styles.pageColumn}></div>
            </div>
        </div>
    );
}
