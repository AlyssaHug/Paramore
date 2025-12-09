import styles from "./page.module.css";

export default function thankYou() {
    return (
        <div className={styles.wholepage}>
            <div className={styles.header}>
                <p className={styles.title}>Paramore</p>
                <p className={styles.thanks}>Thank You</p>
                <p className={styles.us}>Alyssa Huggins & Thea Calaquian</p>
            </div>
            <div className={styles.images}>
                <img src="/thanks/one.jpg" className={styles.img1}></img>
                <img src="/thanks/two.jpg" className={styles.img2}></img>
                <img src="/thanks/three.jpg" className={styles.img3}></img>
            </div>
        </div>
    );
}
