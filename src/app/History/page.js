import styles from "../History/history.module.css";
import classNames from "classnames";

function Page() {
    return (
        <>
            <div className="header">
                <h1 className={styles.title}>
                    P<br />A<br />R<br />A<br />M<br />O<br />R<br />E
                </h1>
            </div>
            <div className="info">
                <div className="days">
                    <div className="2002">
                        <img></img>
                        <h2 className="date">2002</h2>
                        <h3 classname="desc">The Start</h3>
                        <p>
                            In 2002, at age 13, vocalist Hayley Williams moved
                            from her hometown Meridian, Mississippi, to
                            Franklin, Tennessee
                        </p>
                    </div>
                    <div className="2003">
                        <img></img>
                        <h2 className="date">2003</h2>
                        <h3 classname="desc">Forming the Band</h3>
                        <p>
                            The original plan of the label was to turn her into
                            a pop singer. But Williams resisted, saying she
                            wanted to alternative rock music with a band.
                        </p>
                    </div>
                    <div className="2004">
                        <img></img>
                        <h2 className="date">2004</h2>
                        <h3 classname="desc">Official Formation</h3>
                        <p>
                            The band was officially formed by Josh Farro, the
                            lead guitarist, Zac Farro, the drums, Davis, the
                            bass guitar, and Williams, the lead vocals.
                        </p>
                    </div>
                    <div className="2005">
                        <img></img>
                        <h2 className="date">2005</h2>
                        <h3 classname="desc">The Start of something great</h3>
                        <p>
                            The release of their first album, All We Know is
                            Falling.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
