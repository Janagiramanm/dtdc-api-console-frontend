import next from "next";
import styles from "./HeaderNav.module.scss"
import Link from "next/link";

export default function HeaderNav() {
    return (
        <div>
           <div className={styles.HeaderNav}>
               <div className={`row justify-content-between align-items-center`}>
                   <div className={`col-4 d-flex align-items-center`}>
                       <div className={styles.Logo}>
                           <img src={`/images/logo.png`} />
                       </div>
                       <div className={styles.LogoText}>
                           <h3>API Management Console</h3>
                       </div>
                   </div>
                   <div className={`col-4`}>
                        <button className={`btn btn-light`}>Create Customer</button>
                   </div>
               </div>
           </div>
        </div>
    )
}
