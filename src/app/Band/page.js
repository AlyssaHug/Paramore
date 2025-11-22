import styles from "../Band/band.module.css";
import classNames from "classnames";
import Link from "next/link";

function Page() {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>Meet The Band</h1>
                <p className={styles.caption}>The faces behind the music</p>
            </div>
            <div className='band'>
                <Link
                    className={styles.taylor}
                    href='/Band/Taylor'
                    id={styles.left}>
                    <img
                        className={styles.bandTaylor}
                        src='/Band/Home/Taylor.png'
                        alt='Taylor York'
                    />
                </Link>
                <Link
                    className={styles.hayley}
                    id={styles.center}
                    href='/Band/Hayley'>
                    <img
                        className={styles.bandHayley}
                        src='/Band/Home/Hayley.png'
                        alt='Hayley Williams'
                    />
                </Link>
                <Link
                    className={styles.zac}
                    href='/Band/Zac'
                    id={styles.right}>
                    <img
                        className={styles.bandZac}
                        src='/Band/Home/Zac.png'
                        alt='Zac Farro'
                    />
                </Link>
                <p className={styles.spacer}>Paramore</p>
            </div>
        </>
    );
}

export default Page;
