import styles from "./SideNav.module.scss"
import Link from "next/link";

export default function SideNav() {
    return (
        <div className={`${styles.sideNav} d-flex align-items-between flex-column mb-3 `}>
                <div className={styles.middleMenu}>
                    <ul>
                        <li>
                            <Link href={`#`}><img src={`/images/dashboard.svg`} /></Link>
                        </li>
                        <li>
                            <Link href={`/create-user`}><img src={`/images/users.svg`} /></Link>
                        </li>
                        <li>
                            <Link href={`#`}><img src={`/images/rate.svg`} /></Link>
                        </li>
                        <li>
                            <Link href={`#`}><img src={`/images/product.svg`} /></Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottomMenu}>
                    <ul>
                        <li>
                            <Link href={`#`}><img src={`/images/settings.svg`} /></Link>
                        </li>
                        <li>
                            <Link href={`#`}><img src={`/images/logout.svg`} /></Link>
                        </li>
                    </ul>
                </div>
        </div>
    )
}
