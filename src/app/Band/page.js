import styles from "../Band/band.module.css";
import classNames from "classnames";
import Link from "next/link";
import NextBtn from "../components/NextBtn/NextBtn";
import Header from "../components/Header/Header";

function Page() {
    return (
        <div className={styles.wholepage}>
            <Header value='Meet The Band' />
            <div className={styles.content}>
                <NextBtn
                    backLabel='Previous: Homepage'
                    backHref='/'
                    nextLabel='Next Up: Their History'
                    nextHref='/History'
                />
                <div className={styles.body}>
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
                            <img
                                className={styles.bandTaylor}
                                src='/Band/Home/Taylor_Ver01.png'
                                alt='Taylor York'
                            />
                            <img
                                className={styles.bandTaylor}
                                src='/Band/Home/Taylor_Ver02.png'
                                alt='Taylor York'
                            />
                            <img
                                className={styles.bandTaylor}
                                src='/Band/Home/Taylor_Ver03.png'
                                alt='Taylor York'
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
                            <img
                                className={styles.bandZac}
                                src='/Band/Home/Zac_Ver01.png'
                                alt='Zac Farro'
                            />
                            <img
                                className={styles.bandZac}
                                src='/Band/Home/Zac_Ver02.png'
                                alt='Zac Farro'
                            />
                            <img
                                className={styles.bandZac}
                                src='/Band/Home/Zac_Ver03.png'
                                alt='Zac Farro'
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
                            <img
                                className={styles.bandHayley}
                                src='/Band/Home/Hayley_Ver01.png'
                                alt='Hayley Williams'
                            />
                            <img
                                className={styles.bandHayley}
                                src='/Band/Home/Hayley_Ver02.png'
                                alt='Hayley Williams'
                            />
                            <img
                                className={styles.bandHayley}
                                src='/Band/Home/Hayley_Ver03.png'
                                alt='Hayley Williams'
                            />
                        </Link>
                    </div>
                    <div className={styles.header}>
                        <h1 className={styles.title}>
                            The Faces Behind The Music
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
