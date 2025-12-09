import styles from "./Header.module.css";

export default function Header({ value }) {
    return (
        <div className={styles.header}>
            <h1 className={styles.text}>{value}</h1>
        </div>
    );
}
