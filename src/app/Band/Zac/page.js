import Link from "next/link";
import styles from "../Zac/zac.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Next Up: Their History'
                backLabel='Previous: Homepage'
                backHref='/'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.flip}>
                        <BandMemberNext
                            href='/Band/Hayley'
                            value='Hayley'
                            leftIcon={
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='17'
                                    height='25'
                                    viewBox='0 0 17 25'
                                    fill='none'>
                                    <path
                                        d='M14.5 22.5001L2.5 12.5001L14.5 2.50012'
                                        stroke='white'
                                        strokeWidth='5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                        />
                        <BandMemberNext
                            href='/Band/Taylor'
                            value='Taylor'
                            rightIcon={
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='17'
                                    height='25'
                                    viewBox='0 0 17 25'
                                    fill='none'>
                                    <path
                                        d='M2.5 2.50012L14.5 12.5001L2.5 22.5001'
                                        stroke='white'
                                        strokeWidth='5'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            }
                        />
                    </div>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Drummer</h1>
                        <h2 className={styles.caption}>Zac Farro</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Zac/Close-up.png'
                        alt='Zac Farro'
                    />
                    <img
                        className={styles.drums}
                        src='/Band/Zac/drums.png'
                        alt='Drum set
                         graphic'
                    />
                    <p className={styles.spacer}>Zac</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src='/Band/Zac/Perform.jpg'
                        alt='Zac playing the drums'
                    />
                    <p className={styles.desc}>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
