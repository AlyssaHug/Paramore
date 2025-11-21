import styles from "../Band/band.module.css";
import classNames from "classnames";

function Page() {
    return (
        <>
            <div className={styles.header}>
                <h1>Meet The Band</h1>
                <p className={styles.caption}>The faces behind the music</p>
            </div>
            <div className='band'>
                <img
                    className={styles.bandTaylor}
                    src='/Band/Home/Taylor.png'
                    alt='Taylor York'
                />
                <img
                    className={styles.bandHayley}
                    src='/Band/Home/Hayley.png'
                    alt='Hayley Williams'
                />
                <img
                    className={styles.bandZac}
                    src='/Band/Home/Zac.png'
                    alt='Zac Farro'
                />
                <p className={styles.spacer}>Paramore</p>
            </div>
        </>
    );
}

export default Page;
