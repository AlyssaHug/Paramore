import Link from "next/link";
import styles from "../Taylor/taylor.module.css";
import Next from "@/app/components/NextBtn/NextBtn";
import BandMemberNext from "@/app/components/BandBtn/BandBtn";

export default function Page() {
    return (
        <div>
            <Next
                nextLabel='Next Up: Their History'
                backLabel='Previous: Homepage'
            />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.flip}>
                        <BandMemberNext
                            href='/Band/Zac'
                            value='Zac'
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
                            href='/Band/Hayley'
                            value='Hayley'
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
                        <h1 className={styles.title}>Guitarist</h1>
                        <h2 className={styles.caption}>Taylor York</h2>
                    </div>
                    <img
                        className={styles.close}
                        src='/Band/Taylor/Close-up.png'
                        alt='Hayley Williams'
                    />
                    <img
                        className={styles.guitar}
                        src='/Band/Taylor/Guitar.png'
                        alt='Guitar graphic'
                    />
                    <p className={styles.spacer}>Taylor</p>
                </div>
                <div className={styles.right}>
                    <img
                        className={styles.perform}
                        src='/Band/Taylor/Perform.webp'
                        alt='Taylor York playing the guitar during a performace.'
                    />
                    <p className={styles.desc}>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}
