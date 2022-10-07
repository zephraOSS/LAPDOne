import styles from "../styles/HeaderComp.module.css";
import Image from "next/image";

export function HeaderComp() {
    return (
        <header className={styles.header}>
            <div className={styles.badge}>
                <Image src={"/LAPD-Badge.png"} width={138} height={181} />
            </div>
            <div className={[styles.items, styles.right].join(" ")}>
                <div className={styles.item}>
                    <a href={"tel:911"}>Call 911</a>
                </div>
            </div>
        </header>
    );
}
