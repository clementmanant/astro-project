import { useState } from "react"
import styles from "./Menu.module.css"
import { menuData } from "./MenuData"

const Menu = () => {
    const [openMenu, setOpenMenu] =useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={() => setOpenMenu(!openMenu)}>
                <i className="fa-regular fa-bars fa-2xl"></i>
            </div>
            { menuData.length && (
                <nav className={openMenu ? styles.navShow : styles.navHide}>
                    <ul className={styles.items}>
                        {menuData.map(item => (
                            <li className={styles.list} key={item.label}>
                                <a className={styles.link} href={item.url}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ) }
        </div>      
    )
}

export default Menu